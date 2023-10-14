import { useQuery } from "@apollo/client";
import apolloClient from "../apollo-client";
import CardAnime from "./CardAnime";

function Animes({ name, gqlQuery }) {
    const { data, loading, error } = useQuery(gqlQuery, {
        client: apolloClient,
        variables: { page: 1, perPage: 6 },
    });

    if (loading) return <p>Loading...</p>;

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold mb-4">{name}</h1>
            <div className="grid grid-cols-1 xl:grid-cols-6 gap-4 md:grid-cols-3 gap-4 sm:grid-cols-2 gap-4">
                {data.Page.media.map((anime) => {
                    return (
                        <CardAnime
                            key={anime.id}
                            image={anime.coverImage.large}
                            title={anime.title.english}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Animes;
