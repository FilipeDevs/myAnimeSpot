import allGenres from "../filtersData/genresData";
import yearsArray from "../filtersData/yearsData";
import SelectFilter from "./SelectFilter";

function FiltersBar() {
    return (
        <div className="flex flex-col items-center justify-center py-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 xl:grid-cols-4 gap-4 md:grid-cols-2 gap-4 sm:grid-cols-2 gap-3">
                <SelectFilter key={1} name={"Genres"} options={allGenres} />
                <SelectFilter key={2} name={"Year"} options={yearsArray()} />
                <SelectFilter
                    key={3}
                    name={"Season"}
                    options={["Fall", "Spring", "Summer", "Fall"]}
                />
                <SelectFilter
                    key={4}
                    name={"Sort"}
                    options={["Trending", "Popularity"]}
                    sort={true}
                />
            </div>
        </div>
    );
}

export default FiltersBar;