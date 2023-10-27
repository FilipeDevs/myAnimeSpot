import { useStateContext } from "../../contexts/ContextProvider";
import DetailButton from "../common/DetailButton";

function AnimeDetailHeader({ anime }) {
    const { token } = useStateContext();

    return (
        <div className="py-10 flex flex-col items-center justify-center">
            <div className="text-center">
                <h1 className="text-2xl font-bold mb-5 max-w-sm">
                    {anime.title.english
                        ? anime.title.english
                        : anime.title.romaji}
                </h1>
            </div>
            <div className="text-center">
                <img
                    src={anime.coverImage.large}
                    alt="animeCover"
                    className="w-72 h-96 object-cover rounded-lg"
                />
                {token && <DetailButton anime={anime} />}
            </div>
        </div>
    );
}

export default AnimeDetailHeader;
