import { Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import axiosClient from "../clients/axios-client";
import { Collapse } from "flowbite";
import queryString from "query-string";
import homePageFilters from "../filtersData/homePageFilters";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ThemeButton from "./ThemeButton";
import PropTypes from "prop-types";

function Navbar({ token, toggleDarkMode }) {
    const { setUser, setToken } = useStateContext(); // Refresh layout when token is updated

    const onLogout = (event) => {
        event.preventDefault();
        axiosClient.post("/logout").then((response) => {
            setUser(null);
            setToken(null);
            toast.success(response.data.message);
        });
    };

    return (
        <div className="py-8">
            <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-400 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className="">
                        <Link
                            to={"/"}
                            className="flex self-center text-xl font-semibold whitespace-nowrap dark:text-white hover:text-blue-700 "
                        >
                            <img
                                src="/assets/logo_.png"
                                className="h-8 mr-2"
                                alt="Logo"
                            ></img>
                            <span className="mt-1 hidden md:block">
                                MyAnimeSpot
                            </span>
                        </Link>
                    </div>
                    <div className="flex md:order-2 space-x-4">
                        {!token ? (
                            <>
                                <Link
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    aria-current="page"
                                    to={"/login"}
                                >
                                    Log in
                                </Link>
                                <Link
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    aria-current="page"
                                    to={"/register"}
                                >
                                    Register
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    aria-current="page"
                                    to={"/dashboard"}
                                >
                                    Dashboard
                                </Link>
                                <a
                                    href="#"
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    aria-current="page"
                                    onClick={onLogout}
                                >
                                    Log out
                                </a>
                            </>
                        )}

                        <button
                            data-collapse-toggle="navbar-sticky"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-sticky"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                        id="navbar-sticky"
                    >
                        <ul className="items-center flex flex-col p-6 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link
                                    to={{
                                        pathname: "/search",
                                        search: `?${queryString.stringify(
                                            homePageFilters.trending.filters
                                        )}`,
                                    }}
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Trending
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={{
                                        pathname: "/search",
                                        search: `?${queryString.stringify(
                                            homePageFilters.all_time_popular
                                                .filters
                                        )}`,
                                    }}
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Popular
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={{
                                        pathname: "/search",
                                        search: `?${queryString.stringify(
                                            homePageFilters.upcoming.filters
                                        )}`,
                                    }}
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Upcoming
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/search"}
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Browse
                                </Link>
                            </li>
                            <li>
                                <ThemeButton toggleDarkMode={toggleDarkMode} />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

Navbar.propTypes = {
    token: PropTypes.string,
    toggleDarkMode: PropTypes.func.isRequired,
};

export default Navbar;
