import { useLocation } from "react-router-dom";
import { useQuery } from "@apollo/client";
import apolloClient from "../apollo-client";
import searchAnimeQuery from "../queries/searchqlQueries";
import AnimeSearchCard from "./AnimeSearchCard";

function AnimeSearch() {
    const location = useLocation();
    const searchFilters = location.state;

    const { data, loading, error } = useQuery(searchAnimeQuery, {
        client: apolloClient,
        variables: {
            page: 1,
            perPage: 30,
            ...searchFilters,
        },
    });

    if (loading) return <p>Loading...</p>;

    console.log(data);

    return (
        <div className="flex flex-col items-center justify-center py-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 xl:grid-cols-3 gap-4 md:grid-cols-1 gap-4 sm:grid-cols-1 gap-3">
                {data.Page.media.map((anime) => {
                    return (
                        <AnimeSearchCard
                            key={anime.id}
                            image={anime.coverImage.large}
                            title={[anime.title.english, anime.title.romaji]}
                            studios={anime.studios.nodes}
                            description={anime.description}
                            genres={anime.genres}
                            seasonYear={anime.seasonYear}
                            season={anime.season}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default AnimeSearch;
