import { gql } from "@apollo/client";

export const trendingAnimeQuery = gql`
    query ($page: Int, $perPage: Int) {
        Page(page: $page, perPage: $perPage) {
            media(type: ANIME, sort: TRENDING_DESC) {
                id
                title {
                    english
                    romaji
                }
                coverImage {
                    extraLarge
                    large
                    medium
                }
            }
        }
    }
`;

// Function to get the current and next TV season and year
const getCurrentAndNextSeasonAndYear = () => {
    const now = new Date();
    const month = now.getMonth() + 1; // Months are 0-based, so we add 1
    const year = now.getFullYear();

    // Define the TV seasons
    const seasons = {
        winter: [1, 2, 3],
        spring: [4, 5, 6],
        summer: [7, 8, 9],
        fall: [10, 11, 12],
    };

    // Determine the current season
    let currentSeason;
    for (const season in seasons) {
        if (seasons[season].includes(month)) {
            currentSeason = season;
            break;
        }
    }

    // Determine the next season and year
    let nextSeason, nextYear;
    if (currentSeason === "winter") {
        nextSeason = "spring";
        nextYear = year;
    } else if (currentSeason === "spring") {
        nextSeason = "summer";
        nextYear = year;
    } else if (currentSeason === "summer") {
        nextSeason = "fall";
        nextYear = year;
    } else {
        nextSeason = "winter";
        nextYear = year + 1;
    }

    return {
        currentSeason: currentSeason.toUpperCase(),
        currentYear: year,
        nextSeason: nextSeason.toUpperCase(),
        nextYear,
    };
};

const { currentSeason, currentYear, nextSeason, nextYear } = getCurrentAndNextSeasonAndYear();


export const popularSeasonAnimeQuery = gql`
    query ($page: Int, $perPage: Int) {
        Page(page: $page, perPage: $perPage) {
            media(type: ANIME, season: ${currentSeason}, seasonYear: ${currentYear}, sort: POPULARITY_DESC) {
                id
                title {
                    english
                    romaji
                }
                coverImage {
                    extraLarge
                    large
                    medium
                }
            }
        }
    }
`;

export const upcomingAnimeQuery = gql`
    query ($page: Int, $perPage: Int) {
        Page(page: $page, perPage: $perPage) {
            media(type: ANIME, season: ${nextSeason}, seasonYear: ${nextYear}, sort: POPULARITY_DESC) {
                id
                title {
                    english
                    romaji
                }
                coverImage {
                    extraLarge
                    large
                    medium
                }
            }
        }
    }
`;


export const popularAllAnimeQuery = gql`
    query ($page: Int, $perPage: Int) {
        Page(page: $page, perPage: $perPage) {
            media(type: ANIME, sort: POPULARITY_DESC) {
                id
                title {
                    english
                    romaji
                }
                coverImage {
                    extraLarge
                    large
                    medium
                }
            }
        }
    }
`;
