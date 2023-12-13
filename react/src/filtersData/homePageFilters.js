import {
    currentSeason,
    currentYear,
    nextSeason,
    nextYear,
} from "./animeHomeGridsFilters";

const homePageFilters = {
    trending: {
        name: "TRENDING",
        filters: {
            sort: "TRENDING_DESC",
        },
    },

    popular_season: {
        name: "POPULAR THIS SEASON",
        filters: {
            season: currentSeason,
            seasonYear: currentYear,
            sort: "POPULARITY_DESC",
        },
    },

    upcoming: {
        name: "UPCOMING",
        filters: {
            season: nextSeason,
            seasonYear: nextYear,
            sort: "POPULARITY_DESC",
        },
    },

    all_time_popular: {
        name: "ALL TIME POPULAR",
        filters: {
            sort: "POPULARITY_DESC",
        },
    },
};

export default homePageFilters;
