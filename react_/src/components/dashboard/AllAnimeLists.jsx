import axiosClient from "../../axios-client";
import AnimeTable from "./AnimeTable";
import Loading from "../Loading";
import { useQuery } from "react-query";

const getUserAnime = async () => {
    const response = await axiosClient.get(`/anime`);
    return response.data;
};

function AllAnimeLists() {
    const { data, isLoading, isError } = useQuery("user_animes", getUserAnime);

    if (isLoading) return <Loading />;

    return (
        <div className="">
            <h1>All</h1>
            {Object.keys(data).map((anime, index) => {
                const anime_ = data[anime];
                return <AnimeTable key={index} animes={anime_} />;
            })}
        </div>
    );
}

export default AllAnimeLists;
