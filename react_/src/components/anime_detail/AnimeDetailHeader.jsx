function AnimeDetailHeader({
    coverImage,
    title,
    description,
    status,
    epTime,
    startDate,
    season,
    seasonYear,
    genres,
}) {
    return (
        <div className="py-10 flex flex-col items-center justify-center">
            <div className="text-center">
                <h1 className="text-2xl font-bold mb-5 max-w-sm">
                    {title.english ? title.english : title.romaji}
                </h1>
            </div>
            <div className="">
                <img
                    src={coverImage}
                    alt="animeCover"
                    className="w-72 h-96 object-cover rounded-lg"
                />
                <select
                    id="countries"
                    defaultValue={"default"}
                    className="mt-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                    <option value="default" disabled>
                        Add to list
                    </option>
                    <option value="US">Watching</option>
                    <option value="CA">Completed</option>
                    <option value="FR">Dropped</option>
                    <option value="DE">Planning</option>
                </select>
            </div>
        </div>
    );
}

export default AnimeDetailHeader;
