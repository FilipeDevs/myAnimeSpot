import TableRowAnime from "./TableRowAnime";

function AnimeTable({ title, animes }) {
    return (
        <div className="flex justify-center items-center p-5">
            <div>
                <h1 className="text-xl font-bold text-center m-3">
                    {title.toUpperCase()}
                </h1>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    <span className="sr-only">Image</span>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Title
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Progress
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Format
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Edit
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {animes.map((anime, index) => {
                                return (
                                    <TableRowAnime
                                        key={index}
                                        title={anime.title}
                                        id={anime.anime_id}
                                        progress={anime.progress}
                                        episodes={anime.episodes}
                                        format={anime.format}
                                        list={anime.list}
                                    />
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default AnimeTable;
