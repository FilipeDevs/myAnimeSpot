import { gql } from "@apollo/client";



const searchAnimeQuery = gql`
    query ($page: Int, $perPage: Int, $genre : String, $season : MediaSeason, $status : MediaStatus, $seasonYear : Int, $sort : [MediaSort]) {
        Page(page: $page, perPage: $perPage) {
            media(type: ANIME, genre: $genre, season : $season, status: $status,seasonYear: $seasonYear, sort : $sort) {
                id
                description(asHtml : true)
                status
                genres
                seasonYear
                season
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



export default searchAnimeQuery;



