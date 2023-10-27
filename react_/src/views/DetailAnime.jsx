import { Outlet, useParams } from "react-router-dom";
import AnimeDetailHeader from "../components/anime_detail/AnimeDetailHeader";
import TabsAnimeDetail from "../components/anime_detail/TabsAnimeDetail";
import AnimeDetailOverview from "../components/anime_detail/AnimeDetailOverview";

function DetailAnime() {
    const { id, content } = useParams();

    return (
        <>
            <AnimeDetailHeader id={id} />
            <TabsAnimeDetail id={id} />
            {content ? null : <AnimeDetailOverview />}
            <Outlet />
        </>
    );
}

export default DetailAnime;
