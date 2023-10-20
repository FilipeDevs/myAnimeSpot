import React, { useEffect } from "react";
import axiosClient from "../../axios-client";
function AllAnimeLists() {
    const getAnime = () => {
        axiosClient
            .get(`/anime`)
            .then(({ data }) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(`Error in API : ${err}`);
            });
    };

    useEffect(() => {
        getAnime();
    }, []);

    return <div>AllAnimeLists</div>;
}

export default AllAnimeLists;
