function AnimeDetailCharacters({ characters }) {
    return (
        <div className="grid place-items-center my-10">
            <div className="bg-white rounded shadow-lg p-5">
                <h3 className="text-center text-2xl font-bold px-5 py-1 mb-3">
                    Characters
                </h3>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
                    {characters.map((character, index) => {
                        return (
                            <div key={index}>
                                <img
                                    src={character.image.large}
                                    alt=""
                                    className="rounded-lg h-60 w-40"
                                />
                                <p className="text-center font-medium text-gray-600 p-1">
                                    {character.name.full}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default AnimeDetailCharacters;
