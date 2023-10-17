import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

function SearchBar() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchInput, setSearchInput] = useState("");

    // Selected option will update url (add filter parameter)
    const handleChange = (event) => {
        const searchInput = event.target.value;

        if (searchInput.trim() === "") {
            // If searchInput is empty, remove the "search" parameter from the URL
            setSearchParams((params) => {
                params.delete("search");
                return params;
            });
        } else {
            // Update the "search" parameter in the URL
            setSearchParams((params) => {
                params.set("search", searchInput);
                return params;
            });
        }
    };

    useEffect(() => {
        // Initialize the searchInput state with the value from the URL's "search" parameter
        const searchValue = searchParams.get("search");
        if (searchValue) {
            setSearchInput(searchValue);
        }
    }, [searchParams]);

    return (
        <div className="flex justify-center">
            <div className="relative w-96">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                </div>
                <input
                    type="search"
                    id="default-search"
                    className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search..."
                    onChange={handleChange}
                    value={searchInput}
                ></input>
            </div>
        </div>
    );
}

export default SearchBar;
