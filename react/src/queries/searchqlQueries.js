import { gql } from "@apollo/client";

const searchAnimeQuery = gql`
    query (
        $page: Int
        $perPage: Int
        $genre: String
        $season: MediaSeason
        $seasonYear: Int
        $sort: [MediaSort]
        $search: String
        $id: Int
    ) {
        Page(page: $page, perPage: $perPage) {
            media(
                id: $id
                type: ANIME
                genre: $genre
                season: $season
                seasonYear: $seasonYear
                sort: $sort
                search: $search
            ) {
                id
                description(asHtml: true)
                status
                genres
                format
                seasonYear
                season
                episodes
                startDate {
                    year
                    month
                    day
                }
                duration
                characters(page: 1, perPage: 12) {
                    nodes {
                        name {
                            full
                        }
                        image {
                            large
                        }
                    }
                }
                title {
                    english
                    romaji
                }
                coverImage {
                    large
                }
            }
        }
    }
`;

export default searchAnimeQuery;
