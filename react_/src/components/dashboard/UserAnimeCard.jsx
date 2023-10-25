import Loading from "../Loading";
import { useMutation, useQueryClient } from "react-query";
import { useQuery } from "@apollo/client";
import axiosClient from "../../axios-client";
import apolloClient from "../../apollo-client";
import searchAnimeQuery from "../../queries/searchqlQueries";
import { useState } from "react";
import UserAnimeForm from "./UserAnimeForm";

const updateAnimeRequest = async (payload) => {
    const response = await axiosClient.put(
        `/anime/${payload.id}/update`,
        payload
    );
    return response.data;
};

function UserAnimeCard({ anime }) {
    const { data, loading, error } = useQuery(searchAnimeQuery, {
        client: apolloClient,
        variables: { page: 1, perPage: 6, id: anime.id },
    });
    const [isModalOpen, setIsModalOpen] = useState(false);

    const queryClient = useQueryClient();

    const updateAnime = useMutation(updateAnimeRequest, {
        onMutate: async (updatedAnimeData) => {
            // Stop the queries that may affect the update
            await queryClient.cancelQueries("user_animes");

            // Get a snapshot of current data
            const previousAnimeData = queryClient.getQueryData("user_animes");

            // Modify cache to reflect this optimistic update
            queryClient.setQueryData("user_animes", (oldData) => {
                // Create a copy of the old data
                const newData = { ...oldData };

                Object.keys(newData).forEach((oldAnime) => {
                    newData[oldAnime] = newData[oldAnime].map((anime_) => {
                        if (anime_.id === anime.id) {
                            // Update the anime data with the new data
                            return updatedAnimeData;
                        }
                        return anime_;
                    });
                });

                return newData;
            });

            // Return a context object with the old data for rollback
            return { previousAnimeData };
        },
        onError: (error, variables, context) => {
            // Rollback the changes using the snapshot
            queryClient.setQueryData("user_animes", context.previousAnimeData);
        },
        onSettled: () => {
            queryClient.invalidateQueries("user_animes");
        },
    });

    const updateAnimeEntry = (list, progress) => {
        const payload = {
            ...anime,
            id: anime.id,
            progress: progress,
            list: list,
        };
        updateAnime.mutate(payload);
    };

    return (
        <div className="w-80 h-52 border rounded-lg shadow-lg hover:bg-gray-100 flex">
            <div className="flex">
                <div className="w-1/2 relative flex">
                    <a href="#" className="flex">
                        <div className="flex relative">
                            {loading ? (
                                <Loading />
                            ) : (
                                <img
                                    className="rounded-l-lg h-auto w-64"
                                    src={data.Page.media[0].coverImage.large}
                                    alt="userAnime"
                                />
                            )}
                        </div>
                    </a>
                </div>

                <div className="w-1/2 px-3 text-center">
                    <div className="h-24">
                        <h5 className="mt-1 text-sm font-medium text-gray-800">
                            {anime.title}
                        </h5>
                        <span className="text-xs text-gray-500">
                            {anime.format}
                        </span>
                    </div>

                    <div className="h-16 mb-0 text-blue-500">
                        <span>
                            {anime.progress}/
                            {anime.episodes ? anime.episodes : " -"}{" "}
                            {!(anime.progress == anime.episodes) && (
                                <button
                                    onClick={() =>
                                        updateAnimeEntry(
                                            anime.list,
                                            anime.progress + 1
                                        )
                                    }
                                    className="text-xl text-blue-500"
                                >
                                    +
                                </button>
                            )}
                        </span>
                    </div>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="text-sm text-blue-500 underline"
                    >
                        Edit
                    </button>
                    {isModalOpen && (
                        <UserAnimeForm
                            anime={anime}
                            image={data.Page.media[0].coverImage.large}
                            onClose={() => setIsModalOpen(false)}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default UserAnimeCard;
