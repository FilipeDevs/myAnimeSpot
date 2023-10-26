import { Link } from "react-router-dom";

function CardAnime({ anime }) {
    return (
        <div className="flex flex-col items-center text-center">
            <Link to={`/animeDetail/${anime.id}`} state={anime}>
                <img
                    className="h-64 w-48 object-cover rounded-lg" // Adjust the width and height as needed
                    src={anime.coverImage.large}
                    alt="animeCard"
                />
                <p className="truncate max-w-[12rem] mt-2 sm:whitespace-truncate">
                    {anime.title.english
                        ? anime.title.english
                        : anime.title.romaji}
                </p>
            </Link>
        </div>
    );
}

export default CardAnime;
