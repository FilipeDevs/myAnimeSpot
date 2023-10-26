import { Outlet, useParams } from "react-router-dom";
import apolloClient from "../apollo-client";
import Loading from "../components/Loading";
import { useQuery } from "@apollo/client";
import searchAnimeQuery from "../queries/searchqlQueries";
import AnimeDetailHeader from "../components/anime_detail/AnimeDetailHeader";
import TabsAnimeDetail from "../components/anime_detail/TabsAnimeDetail";
import AnimeDetailOverview from "../components/anime_detail/AnimeDetailOverview";

function DetailAnime() {
    const { id, content } = useParams();

    const { data, loading, error } = useQuery(searchAnimeQuery, {
        client: apolloClient,
        variables: { page: 1, perPage: 1, id: id },
    });

    if (error) return <p>Something went wrong !</p>;

    if (loading) return <Loading />;

    const anime = data.Page.media[0];

    return (
        <>
            <AnimeDetailHeader anime={anime} />
            <TabsAnimeDetail id={anime.id} />
            {content ? null : <AnimeDetailOverview />}
            <Outlet />
        </>
    );
}

export default DetailAnime;
