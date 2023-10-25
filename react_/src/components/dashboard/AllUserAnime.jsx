import axiosClient from "../../axios-client";
import UserAnimeGrid from "./UserAnimeGrid";
import Loading from "../Loading";
import { useQuery } from "react-query";

const getUserAnime = async () => {
    const response = await axiosClient.get(`/anime`);
    return response.data;
};

function AllUserAnime() {
    const { data, isLoading, isError } = useQuery("user_animes", getUserAnime);

    if (isLoading) return <Loading />;

    return (
        <div className="">
            <h1>All</h1>
            {Object.keys(data).map((anime, index) => {
                const anime_ = data[anime];
                return (
                    <UserAnimeGrid key={index} title={anime} animes={anime_} />
                );
            })}
        </div>
    );
}

export default AllUserAnime;
