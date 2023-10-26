import homePageFilters from "../filtersData/homePageFilters";
import {
    popularSeasonAnimeQuery,
    trendingAnimeQuery,
    upcomingAnimeQuery,
    popularAllAnimeQuery,
} from "../queries/graphqlQueries";
import AnimeGrid from "./AnimeGrid";

function Main() {
    const animeGridData = [
        {
            name: "Trending Anime",
            gqlQuery: trendingAnimeQuery,
            searchProps: homePageFilters.trending,
        },
        {
            name: "Popular Anime this season",
            gqlQuery: popularSeasonAnimeQuery,
            searchProps: homePageFilters.popular_season,
        },
        {
            name: "Upcoming",
            gqlQuery: upcomingAnimeQuery,
            searchProps: homePageFilters.upcoming,
        },
        {
            name: "All time popular",
            gqlQuery: popularAllAnimeQuery,
            searchProps: homePageFilters.all_time_popular,
        },
    ];

    return (
        <div className="mb-10">
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
