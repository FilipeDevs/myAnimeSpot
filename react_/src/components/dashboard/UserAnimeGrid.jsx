import NothingFound from "../NothingFound";
import UserAnimeCard from "./UserAnimeCard";

function UserAnimeGrid({ animes, title, queryKey }) {
    return (
        <div className="">
            <div className="flex flex-col items-center justify-center py-6">
                {animes.length == 0 ? (
                    <NothingFound />
                ) : (
                    <div>
                        <h1 className="text-left text-lg font-semibold my-2 dark:text-white">
                            {title.toUpperCase()}
                        </h1>
                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2  xl:grid-cols-4 md:grid-cols-1 sm:grid-cols-1 ">
                            {animes.map((anime) => {
                                return (
                                    <UserAnimeCard
                                        key={anime.id}
                                        anime={anime}
                                        queryKey={queryKey}
                                    />
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default UserAnimeGrid;
