import SearchBar from "./SearchBar";
import FiltersBar from "./FiltersBar";
import AnimeSearch from "./AnimeSearch";

function FilterAndSearch() {
    return (
        <>
            <div className="text-center py-10">
                <h1 className="text-2xl font-bold">Browse Anime</h1>
            </div>
            <SearchBar />
            <FiltersBar />
            <AnimeSearch />
        </>
    );
}

export default FilterAndSearch;
