import {
    popularSeasonAnimeQuery,
    trendingAnimeQuery,
    upcomingAnimeQuery,
    popularAllAnimeQuery,
    currentSeason,
    currentYear,
    nextSeason,
    nextYear,
} from "../queries/graphqlQueries";
import AnimeGrid from "./AnimeGrid";

function Main() {
    const animeGridData = [
        {
            name: "Trending Anime",
            gqlQuery: trendingAnimeQuery,
            searchProps: {
                sort: "TRENDING_DESC",
            },
        },
        {
            name: "Popular Anime this season",
            gqlQuery: popularSeasonAnimeQuery,
            searchProps: {
                season: currentSeason,
                seasonYear: currentYear,
                sort: "POPULARITY_DESC",
            },
        },
        {
            name: "Upcoming",
            gqlQuery: upcomingAnimeQuery,
            searchProps: {
                season: nextSeason,
                seasonYear: nextYear,
                sort: "POPULARITY_DESC",
            },
        },
        {
            name: "All time popular",
            gqlQuery: popularAllAnimeQuery,
            searchProps: {
                sort: "POPULARITY_DESC",
            },
        },
    ];

    return (
        <div>
            {animeGridData.map((data, index) => (
                <AnimeGrid
                    key={index}
                    name={data.name}
                    gqlQuery={data.gqlQuery}
                    searchProps={data.searchProps}
                />
            ))}
        </div>
    );
}

export default Main;
