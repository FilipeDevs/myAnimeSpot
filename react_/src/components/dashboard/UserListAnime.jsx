import { useParams } from "react-router-dom";
import axiosClient from "../../axios-client";
import UserAnimeGrid from "./UserAnimeGrid";
import Loading from "../Loading";
import { useQuery } from "react-query";
import ErrorComponent from "../../views/ErrorComponent";

function UserListAnime() {
    const { list } = useParams();
    const getUserAnimeList = async () => {
        const response = await axiosClient.get(`/anime/${list}`);
        return response.data;
    };
    const queryKey = `user_animes_${list}`;
    const { data, isLoading, isError } = useQuery(queryKey, getUserAnimeList);

    if (isLoading) return <Loading />;

    if (isError) return <ErrorComponent />;

    return (
        <div className="">
            <UserAnimeGrid title={list} animes={data} queryKey={queryKey} />
        </div>
    );
}

export default UserListAnime;
