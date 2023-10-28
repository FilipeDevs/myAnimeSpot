import SearchBar from "../components/anime_search/SearchBar";
import FiltersBar from "../components/anime_search/FiltersBar";
import AnimeSearchGrid from "../components/anime_search/AnimeSearchGrid";

function SearchnAnime() {
    return (
        <>
            <div className="text-center py-10">
                <h1 className="text-2xl font-bold">Browse Anime</h1>
            </div>
            <SearchBar />
            <FiltersBar />
            <AnimeSearchGrid />
        </>
    );
}

export default SearchnAnime;
