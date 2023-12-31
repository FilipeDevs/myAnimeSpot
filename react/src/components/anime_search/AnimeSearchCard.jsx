import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function AnimeSearchCard({
    id,
    image,
    title,
    description,
    genres,
    season,
    seasonYear,
}) {
    return (
        <div className="flex w-96 rounded-lg shadow-lg">
            <div className="flex">
                <div className="w-1/2 relative flex">
                    <Link className="flex" to={`/animeDetail/${id}`}>
                        <div className="flex relative">
                            <img
                                className="rounded-l-lg md:h-auto md:w-64"
                                src={image}
                                alt=""
                            />
                            <div className="rounded-bl absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-2 text-center">
                                <h5 className="font-medium text-sm">
                                    {title[0] ? title[0] : title[1]}
                                </h5>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="w-1/2 px-3 dark:text-white dark:bg-gray-900">
                    <h5 className="my-1 text-base text-gray-800 dark:text-white">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

AnimeSearchCard.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    season: PropTypes.string.isRequired,
    seasonYear: PropTypes.number.isRequired,
};

export default AnimeSearchCard;
