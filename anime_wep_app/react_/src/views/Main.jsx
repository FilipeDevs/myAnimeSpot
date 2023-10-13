import { gql } from "@apollo/client";
import Animes from "./Animes";

function Main() {
    const trendingAnimeQuery = gql`
        query ($page: Int, $perPage: Int) {
            Page(page: $page, perPage: $perPage) {
                media(type: ANIME, sort: TRENDING_DESC) {
                    id
                    title {
                        english
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

    return (
        <div>
            <Animes name={"Trending Anime"} gqlQuery={trendingAnimeQuery} />
        </div>
    );
}

export default Main;
