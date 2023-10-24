import TableRowAnime from "./TableRowAnime";

function AnimeTable({ animes }) {
    return (
        <div className="flex justify-center items-center p-5 overflow-x-auto">
            <div>
                <div className="shadow-md sm:rounded-lg">
                    <table className="text-sm text-left text-gray-500 dark:text-gray-400 table-auto">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Image
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
                                        key={anime.id}
                                        anime={anime}
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
