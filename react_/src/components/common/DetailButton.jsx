import useStoreAnime from "../../mutations/useStoreAnime";
import { useQuery } from "react-query";
import Loading from "../Loading";
import axiosClient from "../../axios-client";
import UserAnimeForm from "../dashboard/UserAnimeForm";
import { useState } from "react";

function DetailButton({ anime }) {
    const queryKey = `user_anime_index${anime.id}`;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { storeAnime } = useStoreAnime(queryKey);

    const getUserAnime = async () => {
        const response = await axiosClient.get(`/anime/index/${anime.id}`);
        return response.data;
    };

    const { data, isLoading, isError } = useQuery(queryKey, getUserAnime);

    const addAnime = (event) => {
        event.preventDefault();
        const payload = {
            id: anime.id,
            format: anime.format,
            title: anime.title.english
                ? anime.title.english
                : anime.title.romaji,
            episodes: anime.episodes,
            ep_duration: anime.epTime,
            image_link: anime.coverImage.large,
        };

        storeAnime.mutate(payload);
    };

    if (isLoading) return <Loading />;
    if (isError) return <div>Error loading data</div>;

    const animeExists = !data.length > 0;

    return (
        <div className="w-62">
            {" "}
            {animeExists ? (
                <button
                    type="button"
                    onClick={addAnime}
                    className="w-full px-3 py-2 mt-2 text-sm font-medium text-white bg-blue-700 rounded hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Add to list
                </button>
            ) : (
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full px-3 py-2 mt-2 text-sm font-medium text-white bg-blue-700 rounded hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Edit
                </button>
            )}
            {isModalOpen && (
                <UserAnimeForm
                    queryKey={queryKey}
                    anime={data[0]}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </div>
    );
}

export default DetailButton;
