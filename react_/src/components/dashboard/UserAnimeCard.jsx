import { useState } from "react";
import UserAnimeForm from "./UserAnimeForm";
import useUpdateAnime from "../../mutations/useUpdateAnime";

function UserAnimeCard({ anime, queryKey }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { updateAnime } = useUpdateAnime(queryKey);

    const updateAnimeEntry = (list, progress) => {
        const payload = {
            ...anime,
            id: anime.id,
            progress: progress,
            list: list,
        };
        updateAnime.mutate(payload);
    };

    return (
        <div className="w-80 h-52 border rounded-lg shadow-lg hover:bg-gray-100 flex">
            <div className="flex">
                <div className="w-1/2 relative flex">
                    <a href="#" className="flex">
                        <div className="flex relative">
                            <img
                                className="rounded-l-lg h-auto w-64"
                                src={anime.image_link}
                                alt="userAnime"
                            />
                        </div>
                    </a>
                </div>

                <div className="w-1/2 px-3 text-center">
                    <div className="h-24">
                        <h5 className="mt-1 text-sm font-medium text-gray-800">
                            {anime.title}
                        </h5>
                        <span className="text-xs text-gray-500">
                            {anime.format}
                        </span>
                    </div>

                    <div className="h-16 mb-0 text-blue-500">
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
                                    className="text-xl text-blue-500"
                                >
                                    +
                                </button>
                            )}
                        </span>
                    </div>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="text-sm text-blue-500 underline"
                    >
                        Edit
                    </button>
                    {isModalOpen && (
                        <UserAnimeForm
                            anime={anime}
                            image={anime.image_link}
                            onClose={() => setIsModalOpen(false)}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default UserAnimeCard;
