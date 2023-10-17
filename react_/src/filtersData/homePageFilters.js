import { currentSeason, currentYear, nextSeason, nextYear } from "../queries/graphqlQueries"

const homePageFilters = {
    trending : {
        sort: "TRENDING_DESC",
    },

    popular_season : {
        season: currentSeason,
        seasonYear: currentYear,
        sort: "POPULARITY_DESC",
    },

    upcoming : {
        season: nextSeason,
        seasonYear: nextYear,
        sort: "POPULARITY_DESC",
    },

    all_time_popular : {
        sort: "POPULARITY_DESC",
    }
}

export default homePageFilters
