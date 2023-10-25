import UserAnimeCard from "./UserAnimeCard";

function UserAnimeGrid({ animes, title }) {
    return (
        <div className="">
            <h1 className="text-center">{title}</h1>
            <div className="flex flex-col items-center justify-center py-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xl:grid-cols-4 gap-4 md:grid-cols-1 gap-4 sm:grid-cols-1 gap-3">
                    {animes.map((anime) => {
                        return <UserAnimeCard key={anime.id} anime={anime} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default UserAnimeGrid;
