import { useEffect, useState } from "react";
import axiosClient from "../../axios-client";
import AnimeTable from "./AnimeTable";
import Loading from "../Loading";
function AllAnimeLists() {
    const [animeData, setAnimeData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAnime();
    }, []);

    const getAnime = () => {
        setLoading(true);
        axiosClient
            .get(`/anime`)
            .then((response) => {
                setAnimeData(response.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(`Error in API : ${err}`);
            });
    };

    if (loading) return <Loading />;

    return (
        <div>
            <h1>All</h1>
            {Object.keys(animeData).map((anime, index) => {
                const anime_ = animeData[anime];
                return <AnimeTable key={index} animes={anime_} title={anime} />;
            })}
        </div>
    );
}

export default AllAnimeLists;
