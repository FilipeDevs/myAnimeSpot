import { useState } from "react";
import useUpdateAnime from "../../mutations/useUpdateAnime";

function UserAnimeForm({ anime, onClose, image }) {
    const [inputProgress, setInputProgress] = useState(anime.progress);
    const { updateAnime } = useUpdateAnime();

    const handleInputChange = (e) => {
        const newValue = e.target.value;
        if (
            newValue >= 0 &&
            newValue <= (anime.episodes ? anime.episodes : 1000)
        ) {
            setInputProgress(newValue);
        } else {
            setInputProgress(0);
        }
    };

    const handleSave = () => {
        const selectedList = document.getElementById("selectList").value;
        const payload = {
            ...anime,
            id: anime.id,
            progress: inputProgress,
            list: selectedList,
        };
        updateAnime.mutate(payload);
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
                className="absolute inset-0 bg-black opacity-50"
                onClick={onClose}
            ></div>
            <div className="bg-white w-96 rounded-lg shadow-lg z-50">
                <div className="modal-content p-6">
                    <div className="flex items-center">
                        <img
                            className="w-36 h-48 rounded mr-4"
                            src={image}
                            alt={anime.title}
                        />
                        <div>
                            <h5 className="text-sm font-semibold">
                                {anime.title}
                            </h5>
                            <form>
                                <div className="mb-4 text-left">
                                    <label
                                        htmlFor="list"
                                        className="text-sm font-medium text-gray-600"
                                    >
                                        List
                                    </label>
                                    <select
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
                                        defaultValue={anime.list}
                                        name="list"
                                        id="selectList"
                                    >
                                        <option value="watching">
                                            Watching
                                        </option>
                                        <option value="completed">
                                            Completed
                                        </option>
                                        <option value="dropped">Dropped</option>
                                        <option value="planned">Planned</option>
                                    </select>
                                </div>
                                <div className="mb-4 text-left">
                                    <label
                                        htmlFor="progress"
                                        className="text-sm font-medium text-gray-600"
                                    >
                                        Progress
                                    </label>
                                    <div id="progress" className="flex">
                                        <input
                                            type="number"
                                            max={
                                                anime.episodes
                                                    ? anime.episodes
                                                    : 1000
                                            }
                                            min={0}
                                            name=""
                                            className="w-16 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
                                            id="progressInput"
                                            value={inputProgress}
                                            onChange={handleInputChange}
                                        />
                                        <span className="ml-1 mt-1 text-lg">
                                            / {anime.episodes}
                                        </span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <button
                                        type="button"
                                        onClick={handleSave}
                                        className="mr-2 px-3 py-1 bg-blue-500 text-white rounded text-sm"
                                    >
                                        Save
                                    </button>
                                    <button
                                        type="button"
                                        className="mr-2 px-3 py-1 bg-red-500 text-white rounded text-sm"
                                    >
                                        Delete
                                    </button>
                                    <button
                                        type="button"
                                        onClick={onClose}
                                        className="text-blue-500 underline text-sm"
                                    >
                                        Close
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserAnimeForm;
