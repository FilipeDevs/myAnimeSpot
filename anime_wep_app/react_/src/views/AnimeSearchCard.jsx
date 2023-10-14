import React from "react";

function AnimeSearchCard({
    image,
    title,
    studios,
    description,
    genres,
    status,
}) {
    return (
        <div className="flex">
            <a
                href="#"
                className="flex flex-col bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
                <img
                    className="object-cover w-46 h-58 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    src={image}
                    alt=""
                ></img>
                <div className="flex flex-col p-4 w-56 h-48 line-clamp-8 flex-1">
                    <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
                        {title[0] ? title[0] : title[1]}
                    </h5>
                    <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
                        {description}
                    </p>
                </div>
            </a>
        </div>
    );
}

export default AnimeSearchCard;
