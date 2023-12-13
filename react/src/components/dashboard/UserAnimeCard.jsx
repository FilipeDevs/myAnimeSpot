import { useState } from "react";
import UserAnimeForm from "./UserAnimeForm";
import useUpdateAnime from "../../mutations/useUpdateAnime";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function UserAnimeCard({ anime, queryKey }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { updateAnime } = useUpdateAnime(queryKey);

    const updateAnimeEntry = (list, progress) => {
        const payload = {
            ...anime,
            id: anime.anime_id,
            progress: progress,
            list: list,
        };
        updateAnime.mutate(payload);
    };

    return (
        <div className="w-80 h-52 rounded-lg shadow-lg hover:bg-gray-100 flex dark:bg-gray-800">
            <div className="flex">
                <div className="w-1/2 relative flex">
                    <Link
                        to={`/animeDetail/${anime.anime_id}`}
                        className="flex"
                    >
                        <div className="flex relative">
                            <img
                                className="rounded-l-lg h-auto w-64"
                                src={anime.image_link}
                                alt="userAnime"
                            />
                        </div>
                    </Link>
                </div>

                <div className="w-1/2 px-3 text-center">
                    <div className="h-24">
                        <h5 className="mt-1 text-sm font-medium text-gray-800 dark:text-white">
                            {anime.title}
                        </h5>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                            {anime.format}
                        </span>
                    </div>

                    <div className="h-16 mb-0 text-blue-500 dark:text-blue-300">
                        <span>
                            {anime.progress}/
                            {anime.episodes ? anime.episodes : " -"}{" "}
                            {!(anime.progress == anime.episodes) && (
                                <button
                                    onClick={() =>
                                        updateAnimeEntry(
                                            anime.list,
                                            anime.progress + 1
                                        )
                                    }
                                    className="text-xl text-blue-500 dark:text-blue-300"
                                >
                                    +
                                </button>
                            )}
                        </span>
                    </div>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="text-sm text-blue-500 underline dark:text-blue-300"
                    >
                        Edit
                    </button>
                    {isModalOpen && (
                        <UserAnimeForm
                            queryKey={queryKey}
                            anime={anime}
                            onClose={() => setIsModalOpen(false)}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

UserAnimeCard.propTypes = {
    anime: PropTypes.object.isRequired,
    queryKey: PropTypes.array.isRequired,
};

export default UserAnimeCard;
