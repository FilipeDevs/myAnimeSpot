import {
    popularSeasonAnimeQuery,
    trendingAnimeQuery,
    upcomingAnimeQuery,
    popularAllAnimeQuery,
} from "../queries/graphqlQueries";
import Animes from "./Animes";

function Main() {
    return (
        <div>
            <Animes name={"Trending Anime"} gqlQuery={trendingAnimeQuery} />
            <Animes
                name={"Popular Anime this season"}
                gqlQuery={popularSeasonAnimeQuery}
            />
            <Animes name={"Upcoming"} gqlQuery={upcomingAnimeQuery} />
            <Animes name={"All time popular"} gqlQuery={popularAllAnimeQuery} />
        </div>
    );
}

export default Main;
