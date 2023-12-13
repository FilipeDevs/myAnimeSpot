import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CardAnime({ anime }) {
    return (
        <div className="flex flex-col items-center text-center">
            <Link to={`/animeDetail/${anime.id}`}>
                <img
                    className="h-64 w-48 object-cover rounded"
                    src={anime.coverImage.large}
                    alt="animeCard"
                />
                <p className="truncate max-w-[12rem] mt-2 sm:whitespace-truncate dark:text-white">
                    {anime.title.english
                        ? anime.title.english
                        : anime.title.romaji}
                </p>
            </Link>
        </div>
    );
}

CardAnime.propTypes = {
    anime: PropTypes.object.isRequired,
};

export default CardAnime;
