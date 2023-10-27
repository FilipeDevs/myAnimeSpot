import { useStateContext } from "../../contexts/ContextProvider";
import DetailButton from "../common/DetailButton";
import Loading from "../../components/Loading";
import searchAnimeQuery from "../../queries/searchqlQueries";
import { useQuery } from "@apollo/client";
import apolloClient from "../../apollo-client";

function AnimeDetailHeader({ id }) {
    const { token } = useStateContext();

    const { data, loading, error } = useQuery(searchAnimeQuery, {
        client: apolloClient,
        variables: { page: 1, perPage: 6, id: id },
    });

    if (error) return <p>Something went wrong !</p>;

    if (loading) return <Loading />;

    const anime = data.Page.media[0];

    return (
        <div className="py-10 flex flex-col items-center justify-center">
            <div className="text-center">
                <h1 className="text-2xl font-bold mb-5 max-w-sm">
                    {anime.title.english
                        ? anime.title.english
                        : anime.title.romaji}
                </h1>
            </div>
            <div className="text-center">
                <img
                    src={anime.coverImage.large}
                    alt="animeCover"
                    className="w-72 h-96 object-cover rounded-lg"
                />
                {token && <DetailButton anime={anime} />}
            </div>
        </div>
    );
}

export default AnimeDetailHeader;
