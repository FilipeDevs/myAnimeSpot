import React from "react";

function AnimeSearchCard({
    image,
    title,
    studios,
    description,
    genres,
    season,
    seasonYear,
}) {
    return (
        <div className="w-96 border rounded-lg shadow-lg hover:bg-gray-100 flex">
            <div className="flex">
                <div className="w-1/2 relative flex">
                    <a href="#" className="flex">
                        <div className="flex relative">
                            <img
                                className="rounded-l-lg md:h-auto md:w-64"
                                src={image}
                                alt=""
                            />
                            <div className="rounded-l-lg absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-2 text-center">
                                <h5 className="font-medium text-sm">
                                    {title[0] ? title[0] : title[1]}
                                </h5>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="w-1/2 pl-3">
                    <h5 className="p-1 text-base font-semibold">
                        {season} - {seasonYear}
                    </h5>
                    <div className="h-48 mb-5 overflow-y-auto scrollDiv">
                        <p
                            dangerouslySetInnerHTML={{ __html: description }}
                            className="text-xs"
                        ></p>
                    </div>
                    <div className="">
                        <div className="pb-2 flex items-center">
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                                {genres[0]}
                            </span>
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                                {genres[1]}
                            </span>
                            <button className="bg-green-500 text-white w-5 h-5 rounded-full flex items-center justify-center hover:bg-green-600 focus:outline-none">
                                <span className="text-sm">+</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AnimeSearchCard;