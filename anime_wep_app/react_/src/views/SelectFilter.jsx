import React from "react";

function SelectFilter({ name, options, sort }) {
    return (
        <div>
            <label
                htmlFor="filter"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                {name}
            </label>
            <select
                defaultValue={sort ? "Popularity" : "Any"}
                id="filter"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                {!sort && <option value="Any">Any</option>}
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default SelectFilter;
