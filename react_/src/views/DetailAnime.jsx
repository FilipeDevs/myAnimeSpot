import { Outlet, useParams } from "react-router-dom";
import apolloClient from "../apollo-client";
import Loading from "../components/Loading";
import { useQuery } from "@apollo/client";
import searchAnimeQuery from "../queries/searchqlQueries";
import AnimeDetailHeader from "../components/anime_detail/AnimeDetailHeader";
import TabsAnimeDetail from "../components/anime_detail/TabsAnimeDetail";

function DetailAnime() {
    const { id } = useParams();

    const { data, loading, error } = useQuery(searchAnimeQuery, {
        client: apolloClient,
        variables: { page: 1, perPage: 1, id: id },
    });

    if (error) return <p>Something went wrong !</p>;

    if (loading) return <Loading />;

    const data_ = data.Page.media[0];

    return (
        <>
            <AnimeDetailHeader
                title={data_.title}
                coverImage={data_.coverImage.large}
                description={data_.description}
                status={data_.status}
                epTime={data_.duration}
                startDate={data_.startDate}
                season={data_.season}
                seasonYear={data_.seasonYear}
                genres={data_.genres}
            />
            <TabsAnimeDetail id={data_.id} />
            <Outlet />
        </>
    );
}

export default DetailAnime;
