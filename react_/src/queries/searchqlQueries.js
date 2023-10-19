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
                seasonYear
                season
                startDate {
                    year
                    month
                    day
                }
                duration
                characters(page: 1, perPage: 10) {
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
                bannerImage
            }
        }
    }
`;

export default searchAnimeQuery;
