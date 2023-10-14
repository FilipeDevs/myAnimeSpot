import { gql } from "@apollo/client";



const searchAnimeQuery = gql`
    query ($page: Int, $perPage: Int, $genre : String, $season : MediaSeason, $status : MediaStatus, $seasonYear : Int, $sort : [MediaSort]) {
        Page(page: $page, perPage: $perPage) {
            media(type: ANIME, genre: $genre, season : $season, status: $status,seasonYear: $seasonYear, sort : $sort) {
                id
                studios(sort : NAME, isMain : true) {
                    nodes {
                        name
                    }
                }
                description(asHtml : true)
                status
                genres
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



