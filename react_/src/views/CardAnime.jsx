import React from "react";
import { Link } from "react-router-dom";

function CardAnime({ image, title, id }) {
    return (
        <div className="flex flex-col items-center text-center">
            <Link to={`/animeDetail/${id}`}>
                <img
                    className="h-64 w-48 object-cover rounded-lg" // Adjust the width and height as needed
                    src={image}
                    alt="animeCard"
                />
                <p className="truncate max-w-[12rem] mt-2 sm:whitespace-truncate">
                    {title[0] ? title[0] : title[1]}
                </p>
            </Link>
        </div>
    );
}

export default CardAnime;
