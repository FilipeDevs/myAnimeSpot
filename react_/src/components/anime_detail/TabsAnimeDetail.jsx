import { Link, useLocation } from "react-router-dom";
import AnimeDetailOverview from "./AnimeDetailOverview";

function TabsAnimeDetail({ id }) {
    return (
        <div>
            <div className="flex justify-center items-center">
                <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                    <ul className="flex flex-wrap -mb-px">
                        <li className="mr-2">
                            <Link
                                to={"/animeDetail/" + id}
                                className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                            >
                                Overview
                            </Link>
                        </li>
                        <li className="mr-2">
                            <Link
                                to={"/animeDetail/" + id + "/characters"}
                                className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                            >
                                Characters
                            </Link>
                        </li>
                        <li className="mr-2">
                            <Link
                                to={"/animeDetail/" + id + "/recommendations"}
                                className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                            >
                                Recommendations
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TabsAnimeDetail;
