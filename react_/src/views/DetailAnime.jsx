import { useParams } from "react-router-dom";
import AnimeDetailHeader from "../components/anime_detail/AnimeDetailHeader";
import apolloClient from "../apollo-client";
import Loading from "../components/Loading";
import searchAnimeQuery from "../queries/searchqlQueries";
import { useQuery } from "@apollo/client";
import Error from "./Error";
import AnimeDetailOverview from "../components/anime_detail/AnimeDetailOverview";
import AnimeDetailCharacters from "../components/anime_detail/AnimeDetailContent";

function DetailAnime() {
    const { id } = useParams();

    const { data, loading, error } = useQuery(searchAnimeQuery, {
        client: apolloClient,
        variables: { page: 1, perPage: 6, id: id },
    });

    if (error) return <Error />;

    if (loading) return <Loading />;

    const anime = data.Page.media[0];

    return (
        <div className="">
            <AnimeDetailHeader id={id} anime={anime} />
            <AnimeDetailOverview anime={anime} />
            <AnimeDetailCharacters characters={anime.characters.nodes} />
        </div>
    );
}

export default DetailAnime;
