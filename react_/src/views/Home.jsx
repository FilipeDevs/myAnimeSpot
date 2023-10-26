import homePageFilters from "../filtersData/homePageFilters";
import AnimeGrid from "./AnimeGrid";

function Main() {
    return (
        <div className="mb-10">
            {Object.keys(homePageFilters).map((data, index) => {
                return (
                    <AnimeGrid
                        key={index}
                        name={homePageFilters[data].name}
                        searchProps={homePageFilters[data].filters}
                    />
                );
            })}
        </div>
    );
}

export default Main;
