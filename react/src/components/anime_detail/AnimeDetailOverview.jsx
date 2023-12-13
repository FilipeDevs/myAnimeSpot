import PropTypes from "prop-types";

/**
 * Formats the given info string by replacing underscores with spaces and capitalizing the first letter.
 * @param {string} info - The info string to be formatted.
 * @returns {string|null} The formatted info string, or null if the input is null or undefined.
 */
function formatInfo(info) {
    if (info) {
        info = info.replace(/_/g, " ");
        info = info.charAt(0).toUpperCase() + info.slice(1).toLowerCase();
        return info;
    }

    return null;
}

function AnimeDetailOverview({ anime }) {
    const formattedStatus = formatInfo(anime.status);
    const formattedSeason = formatInfo(anime.season);
    return (
        <div className="grid place-items-center my-10">
            <div className="bg-white rounded shadow-lg dark:bg-gray-900">
                <dl className="grid max-w-7xl grid-cols-2 gap-6 p-2 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
                    <div className="flex flex-col items-center justify-center">
                        <dd className="text-gray-500 dark:text-gray-400">
                            Status
                        </dd>
                        <dt className="mb-2 text-lg font-bold">
                            {formattedStatus}
                        </dt>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dd className="text-gray-500 dark:text-gray-400">
                            Format
                        </dd>
                        <dt className="mb-2  text-lg font-bold">
                            {anime.format}
                        </dt>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dd className="text-gray-500 dark:text-gray-400">
                            Episodes
                        </dd>
                        <dt className="mb-2 text-lg font-bold">
                            {anime.episodes ? anime.episodes : "-"}
                        </dt>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dd className="text-gray-500 dark:text-gray-400">
                            Duration
                        </dd>
                        <dt className="mb-2 text-lg font-bold">
                            {anime.duration ? `${anime.duration}min` : "-"}
                        </dt>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dd className="text-gray-500 dark:text-gray-400">
                            Season
                        </dd>
                        <dt className="mb-2 text-lg font-bold">
                            {formattedSeason ? formattedSeason : " - "}{" "}
                            {anime.seasonYear ? anime.seasonYear : " - "}
                        </dt>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dd className="text-gray-500 dark:text-gray-400">
                            Genre
                        </dd>
                        <dt className="mb-2 text-lg font-bold break-words">
                            {anime.genres[0]}
                        </dt>
                    </div>
                </dl>
            </div>
        </div>
    );
}

AnimeDetailOverview.propTypes = {
    anime: PropTypes.object.isRequired,
};

export default AnimeDetailOverview;
