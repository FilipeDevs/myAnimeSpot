import React from "react";

function CardAnime({ image, title }) {
    return (
        <div className="flex flex-col items-center text-center">
            <img
                className="h-64 w-auto max-w-full rounded-lg"
                src={image}
                alt="animeCard"
            />
            <p className="truncate max-w-[15rem] mt-2 sm:whitespace-truncate">
                {title}
            </p>
        </div>
    );
}

export default CardAnime;
