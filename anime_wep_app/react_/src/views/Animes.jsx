import { useQuery } from "@apollo/client";
import apolloClient from "../apollo-client";
import CardAnime from "./CardAnime";

function Animes({ name, gqlQuery }) {
    const { data, loading, error } = useQuery(gqlQuery, {
        client: apolloClient,
        variables: { page: 1, perPage: 5 },
    });

    if (loading) return <p>Loading...</p>;

    return (
        <>
            <h1>{name}</h1>
            <div className="flex">
                {data.Page.media.map((anime) => {
                    return (
                        <CardAnime
                            key={anime.id}
                            image={anime.coverImage.medium}
                            title={anime.title.english}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default Animes;
