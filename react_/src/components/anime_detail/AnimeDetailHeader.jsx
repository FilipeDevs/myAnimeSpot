import { useStateContext } from "../../contexts/ContextProvider";
import DetailButton from "./DetailButton";
import { useState, useEffect } from "react";

function AnimeDetailHeader({ anime }) {
    const { token } = useStateContext();
    const [showFullDescription, setShowFullDescription] = useState(true);

    useEffect(() => {
        if (anime.description.length > 800) {
            setShowFullDescription(false);
        } else {
            setShowFullDescription(true);
        }
    }, [anime.description]);

    return (
        <div className="grid place-items-center mt-10">
            <div className="bg-white rounded shadow-lg">
                <div className="md:flex px-4 leading-none max-w-4xl">
                    <div className="flex-none my-5 px-5 max-w-xs">
                        <img
                            src={anime.coverImage.large}
                            alt="animeImage"
                            className="rounded shadow-2xl w-full"
                        />
                        <div>{token && <DetailButton anime={anime} />}</div>
                    </div>

                    <div className="flex-col">
                        <h1 className="pt-4 text-2xl font-bold">
                            {anime.title.english}
                        </h1>
                        <p
                            className="md:block my-4 text-sm text-left"
                            dangerouslySetInnerHTML={{
                                __html: showFullDescription
                                    ? anime.description
                                    : anime.description.slice(0, 400) + "...",
                            }}
                        ></p>
                        {!showFullDescription && (
                            <button
                                onClick={() => setShowFullDescription(true)}
                                className="text-blue-500 underline cursor-pointer text-sm"
                            >
                                Read more
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AnimeDetailHeader;
