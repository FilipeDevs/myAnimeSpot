import { useQuery } from "@apollo/client";
import apolloClient from "../../clients/apollo-client";
import CardAnime from "./CardAnime";
import { Link } from "react-router-dom";
import queryString from "query-string";
import Loading from "../Loading";
import searchAnimeQuery from "../../queries/searchqlQueries";
import ErrorComponent from "../../views/ErrorComponent";
import PropTypes from "prop-types";

function AnimeGrid({ name, searchProps }) {
    const { data, loading, error } = useQuery(searchAnimeQuery, {
        client: apolloClient,
        variables: { page: 1, perPage: 6, ...searchProps },
    });

    if (error) return <ErrorComponent />;

    if (loading) return <Loading />;

    return (
        <div className="flex flex-col items-center justify-center py-6">
            <div className="text-center py-5">
                <h1 className="text-2xl font-bold dark:text-white">{name}</h1>
                <Link
                    to={{
                        pathname: "/search",
                        search: `?${queryString.stringify(searchProps)}`,
                    }}
                    className="italic text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                    View all
                </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 xl:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 ">
                {data.Page.media.map((anime) => {
                    return <CardAnime key={anime.id} anime={anime} />;
                })}
            </div>
        </div>
    );
}

AnimeGrid.propTypes = {
    name: PropTypes.string.isRequired,
    searchProps: PropTypes.object.isRequired,
};

export default AnimeGrid;
