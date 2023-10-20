import { Link } from "react-router-dom";

function DashboardTabs() {
    return (
        <div>
            <div className="flex justify-center items-center">
                <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                    <ul className="flex flex-wrap -mb-px">
                        <li className="mr-2">
                            <Link
                                to={"/dashboard/"}
                                className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                            >
                                All
                            </Link>
                            <Link
                                to={"/dashboard/watching"}
                                className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                            >
                                Watching
                            </Link>
                        </li>
                        <li className="mr-2">
                            <Link
                                to={"/dashboard/planned"}
                                className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                            >
                                Planned
                            </Link>
                        </li>
                        <li className="mr-2">
                            <Link
                                to={"/dashboard/completed"}
                                className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                            >
                                Completed
                            </Link>
                        </li>
                        <li className="mr-2">
                            <Link
                                to={"/dashboard/dropped"}
                                className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                            >
                                Dropped
                            </Link>
                        </li>
                        <li className="mr-2">
                            <Link
                                to={"/dashboard/stats"}
                                className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                            >
                                Statistics
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default DashboardTabs;
