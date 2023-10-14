import {
    popularAnimeQuery,
    trendingAnimeQuery,
    upcomingAnimeQuery,
} from "../queries/graphqlQueries";
import Animes from "./Animes";

function Main() {
    return (
        <div>
            <Animes name={"Trending Anime"} gqlQuery={trendingAnimeQuery} />
            <Animes
                name={"Popular Anime this season"}
                gqlQuery={popularAnimeQuery}
            />
            <Animes name={"Upcoming"} gqlQuery={upcomingAnimeQuery} />
        </div>
    );
}

export default Main;
