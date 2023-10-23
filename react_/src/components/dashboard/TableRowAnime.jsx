import Loading from "../Loading";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../../axios-client";
import apolloClient from "../../apollo-client";
import searchAnimeQuery from "../../queries/searchqlQueries";
import { useMutation } from "react-query";

function TableRowAnime({ title, id, progress, episodes, format, list }) {
    const { data, loading, error } = useQuery(searchAnimeQuery, {
        client: apolloClient,
        variables: { page: 1, perPage: 6, id: id },
    });

    const [anime, setAnime] = useState({
        // Initial anime data
        id,
        title,
        progress,
        episodes,
        format,
        list,
    });

    const updateAnime = useMutation(
        (payload) => axiosClient.put(`/anime/${anime.id}/update`, payload),
        {
            onMutate: (updatedAnimeData) => {
                const oldAnimeData = anime; // Save the current data
                // Optimistically update the anime data
                setAnime(updatedAnimeData);

                // Return a context object with the old data for rollback
                return { oldAnimeData };
            },
            onError: (error, variables, context) => {
                // If the mutation fails, revert the optimistic update
                const { oldAnimeData } = context;
                setAnime(oldAnimeData);
            },
            onSettled: () => {
                console.log(anime.id);
                axiosClient.get(`/anime/index/${anime.id}`).then((response) => {
                    console.log(response);
                });
            },
        }
    );

    const updateAnimeEntry = (list, progress) => {
        const payload = {
            ...anime,
            anime_id: id,
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
                    <Link to={`/animeDetail/${id}`}>{anime.title}</Link>
                </td>

                <td className="px-6 py-4">
                    <a
                        onClick={() =>
                            updateAnimeEntry(anime.list, anime.progress - 1)
                        }
                        className="text-xl"
                        href="#"
                    >
                        -{" "}
                    </a>
                    {anime.progress}/{anime.episodes ? anime.episodes : " ?"}{" "}
                    <a
                        onClick={() =>
                            updateAnimeEntry(anime.list, anime.progress + 1)
                        }
                        className="text-xl"
                        href="#"
                    >
                        +
                    </a>
                </td>
                <td className="px-6 py-4">{anime.format}</td>
                <td className="px-6 py-4">
                    <div className="flex">
                        <select
                            defaultValue={anime.list}
                            onChange={(event) =>
                                updateAnimeEntry(
                                    event.target.value,
                                    anime.progress
                                )
                            }
                            id="countries"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full mr-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option value="watching">Watching</option>
                            <option value="planned">Planned</option>
                            <option value="dropped">Dropped</option>
                            <option value="completed">Completed</option>
                        </select>
                        <a
                            href="#"
                            onClick={() => deleteAnime(anime.id)}
                            className="mt-2 font-medium text-red-600 dark:text-red-500 hover:underline"
                        >
                            Remove
                        </a>
                    </div>
                </td>
            </tr>
        </>
    );
}

export default TableRowAnime;
