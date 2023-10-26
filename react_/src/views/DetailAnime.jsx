import { Outlet, useLocation, useParams } from "react-router-dom";
import AnimeDetailHeader from "../components/anime_detail/AnimeDetailHeader";
import TabsAnimeDetail from "../components/anime_detail/TabsAnimeDetail";
import AnimeDetailOverview from "../components/anime_detail/AnimeDetailOverview";

function DetailAnime() {
    const { content } = useParams();
    const location = useLocation();
    const anime = location.state;

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
