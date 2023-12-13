import allGenres from "../../filtersData/genresData";
import yearsArray from "../../filtersData/yearsData";
import SelectFilter from "./SelectFilter";

function FiltersBar() {
    return (
        <div className="flex flex-col items-center justify-center py-6">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-4  xl:grid-cols-4  md:grid-cols-2  sm:grid-cols-2">
                <SelectFilter
                    key={1}
                    name={"Genres"}
                    options={allGenres}
                    type={"genre"}
                />
                <SelectFilter
                    key={2}
                    name={"Year"}
                    options={yearsArray()}
                    type={"seasonYear"}
                />
                <SelectFilter
                    key={3}
                    name={"Season"}
                    options={["FALL", "SPRING", "SUMMER", "WINTER"]}
                    type={"season"}
                />
                <SelectFilter
                    key={4}
                    name={"Sort"}
                    options={["TRENDING", "POPULARITY"]}
                    type={"sort"}
                />
            </div>
        </div>
    );
}

export default FiltersBar;
