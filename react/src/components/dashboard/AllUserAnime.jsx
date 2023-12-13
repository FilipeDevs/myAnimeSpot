import axiosClient from "../../clients/axios-client";
import UserAnimeGrid from "./UserAnimeGrid";
import Loading from "../Loading";
import { useQuery } from "react-query";
import NothingFound from "../NothingFound";
import ErrorComponent from "../../views/ErrorComponent";

const getUserAnime = async () => {
    const response = await axiosClient.get(`/anime`);
    return response.data;
};

function AllUserAnime() {
    const queryKey = "user_animes";
    const { data, isLoading, isError } = useQuery(queryKey, getUserAnime);

    if (isLoading) return <Loading />;

    if (isError) return <ErrorComponent />;

    // Group anime by list
    const groupedAnimes = data.reduce((result, anime) => {
        const list = anime.list;
        if (!result[list]) {
            result[list] = [];
        }
        result[list].push(anime);
        return result;
    }, {});

    // List order
    const listOrder = ["watching", "planned", "completed", "dropped"];

    return (
        <div className="">
            {listOrder.map((list, index) =>
                groupedAnimes[list] && groupedAnimes[list].length > 0 ? (
                    <UserAnimeGrid
                        key={index}
                        title={list}
                        animes={groupedAnimes[list]}
                        queryKey={queryKey}
                    />
                ) : null
            )}
            {Object.keys(groupedAnimes).length === 0 && <NothingFound />}
        </div>
    );
}

export default AllUserAnime;
