import Loading from "../Loading";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../../axios-client";
import apolloClient from "../../apollo-client";
import searchAnimeQuery from "../../queries/searchqlQueries";

function TableRowAnime({ title, id, progress, episodes, format, list }) {
    const [loading_, setLoading] = useState(false);

    const { data, loading, error } = useQuery(searchAnimeQuery, {
        client: apolloClient,
        variables: { page: 1, perPage: 6, id: id },
    });

    const changeList = (event, anime_id) => {
        event.preventDefault();
        const newList = event.target.value;
        const payload = {
            anime_id: anime_id,
            list: newList,
        };
        setLoading(true);
        axiosClient
            .put(`/anime/${anime_id}/update-list`, payload)
            .then((response) => {
                console.log(`List changed ! ${response}`);
                setLoading(false);
                // Refresh the page
                window.location.reload();
            })
            .catch((err) => {
                console.log(`Error in API : ${err}`);
            });
    };

    const updateProgress = (num, anime_id, currentProgress, episodes) => {
        event.preventDefault();
        if (
            (currentProgress < 1 && num == -1) ||
            (currentProgress == episodes && num == +1)
        ) {
            return;
        }
        const payload = {
            anime_id: anime_id,
            progress: num,
        };
        setLoading(true);
        axiosClient
            .put(`/anime/${anime_id}/update-progress`, payload)
            .then((response) => {
                console.log(response);
                setLoading(false);
                // Refresh the page
                window.location.reload();
            })
            .catch((err) => {
                console.log(`Error in API : ${err}`);
            });
    };

    const deleteAnime = (anime_id) => {
        event.preventDefault();
        const payload = {
            anime_id: anime_id,
        };
        setLoading(true);
        axiosClient
            .delete(`/anime/${anime_id}`, payload)
            .then((response) => {
                console.log(response);
                setLoading(false);
                // Refresh the page
                window.location.reload();
            })
            .catch((err) => {
                console.log(`Error in API : ${err}`);
            });
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
                    <Link to={`/animeDetail/${id}`}>{title}</Link>
                </td>

                <td className="px-6 py-4">
                    <a
                        onClick={() =>
                            updateProgress(-1, id, progress, episodes)
                        }
                        className="text-xl"
                        href="#"
                    >
                        -{" "}
                    </a>
                    {progress}/{episodes ? episodes : " ?"}{" "}
                    <a
                        onClick={() =>
                            updateProgress(+1, id, progress, episodes)
                        }
                        className="text-xl"
                        href="#"
                    >
                        +
                    </a>
                </td>
                <td className="px-6 py-4">{format}</td>
                <td className="px-6 py-4">
                    {loading_ ? (
                        <Loading />
                    ) : (
                        <div className="flex">
                            <select
                                defaultValue={list}
                                onChange={(event) => changeList(event, id)}
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
                                onClick={() => deleteAnime(id)}
                                className="mt-2 font-medium text-red-600 dark:text-red-500 hover:underline"
                            >
                                Remove
                            </a>
                        </div>
                    )}
                </td>
            </tr>
        </>
    );
}

export default TableRowAnime;
