import Loading from "../Loading";
import { useMutation, useQueryClient } from "react-query";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import axiosClient from "../../axios-client";
import apolloClient from "../../apollo-client";
import searchAnimeQuery from "../../queries/searchqlQueries";

const updateAnimeRequest = async (payload) => {
    const response = await axiosClient.put(
        `/anime/${payload.id}/update`,
        payload
    );
    return response.data;
};

function TableRowAnime({ anime }) {
    const { data, loading, error } = useQuery(searchAnimeQuery, {
        client: apolloClient,
        variables: { page: 1, perPage: 6, id: anime.id },
    });

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
            //queryClient.invalidateQueries("user_animes");
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
        <>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover-bg-gray-600">
                <td
                    scope="row"
                    className="w-32 p-4 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                    {loading ? (
                        <Loading />
                    ) : (
                        <img
                            src={data.Page.media[0].coverImage.large}
                            alt="image"
                        />
                    )}
                </td>

                <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                    <Link to={`/animeDetail/${anime.id}`}>{anime.title}</Link>
                </td>

                <td className="px-6 py-4">
                    {anime.progress}/{anime.episodes ? anime.episodes : " ?"}{" "}
                    {!(anime.progress == anime.episodes) && (
                        <a
                            onClick={() =>
                                updateAnimeEntry(anime.list, anime.progress + 1)
                            }
                            className="text-xl"
                        >
                            +
                        </a>
                    )}
                </td>
                <td className="px-6 py-4">{anime.format}</td>
                <td className="px-6 py-4">
                    <a href="#">Edit</a>
                </td>
            </tr>
        </>
    );
}

export default TableRowAnime;
