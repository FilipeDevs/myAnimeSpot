import NothingFound from "../NothingFound";

function AnimeDetailCharacters({ characters }) {
    return (
        <div className="grid place-items-center my-10">
            <div className="bg-white rounded shadow-lg p-5 max-2xl dark:bg-gray-900">
                <h3 className="text-center text-2xl font-bold px-5 py-1 mb-3 dark:text-white">
                    Characters
                </h3>
                {characters.length == 0 ? (
                    <NothingFound />
                ) : (
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
                        {characters.map((character, index) => {
                            return (
                                <div
                                    key={index}
                                    className="w-40 rounded overflow-hidden shadow-lg dark:bg-gray-800"
                                >
                                    <img
                                        src={character.image.large}
                                        alt="animeCharacter "
                                        className="w-72"
                                    />
                                    <div className="px-5 py-3">
                                        <div className="font-medium text-lg mb-1 dark:text-white">
                                            {character.name.full}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}

export default AnimeDetailCharacters;
