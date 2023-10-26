import useStoreAnime from "../../mutations/useStoreAnime";
import { useQuery } from "react-query";
import Loading from "../Loading";
import axiosClient from "../../axios-client";
import { useState } from "react";
import UserAnimeForm from "../dashboard/UserAnimeForm";

function AnimeDetailHeader({ anime }) {
    const queryKey = "user_anime_index";
    const { storeAnime } = useStoreAnime(queryKey);
    const [isModalOpen, setIsModalOpen] = useState(false);
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

    return (
        <div className="py-10 flex flex-col items-center justify-center">
            <div className="text-center">
                <h1 className="text-2xl font-bold mb-5 max-w-sm">
                    {anime.title.english
                        ? anime.title.english
                        : anime.title.romaji}
                </h1>
            </div>
            <div className="text-center">
                <img
                    src={anime.coverImage.large}
                    alt="animeCover"
                    className="w-72 h-96 object-cover rounded-lg"
                />
                {data.length == 0 ? (
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
        </div>
    );
}

export default AnimeDetailHeader;
