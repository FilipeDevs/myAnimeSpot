import { useParams } from "react-router-dom"
import apolloClient from "../apollo-client";
import Loading from "../components/Loading";
import { useQuery } from "@apollo/client";
import searchAnimeQuery from "../queries/searchqlQueries";
import AnimeDetailHeader from "../components/AnimeDetailHeader";

function DetailAnime() {

    const { id } = useParams();

    const { data, loading, error } = useQuery(searchAnimeQuery, {
        client: apolloClient,
        variables: { page: 1, perPage: 1, id: id},
    });

    if (error) return <p>Something went wrong !</p>;

    if (loading) return <Loading />;

    console.log(data.Page.media[0].title)

    return (
        <>
            <AnimeDetailHeader
            title={data.Page.media[0].title}
            bannerImage={data.Page.media[0].bannerImage}
            coverImage={data.Page.media[0].coverImage.large}
            description={data.Page.media[0].description}/>
        </>
    )
}

export default DetailAnime
