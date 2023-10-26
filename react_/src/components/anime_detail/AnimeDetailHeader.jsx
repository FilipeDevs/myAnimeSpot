import useStoreAnime from "../../mutations/useStoreAnime";

function AnimeDetailHeader({ anime }) {
    const { storeAnime } = useStoreAnime();

    const onSubmit = (event) => {
        event.preventDefault();
        const payload = {
            id: anime.id,
            format: anime.format,
            title: anime.title.english
                ? anime.title.english
                : anime.title.romaji,
            episodes: anime.episodes,
            ep_duration: anime.epTime,
            image_link: anime.coverImage.large,
        };

        storeAnime.mutate(payload);
    };

    return (
        <div className="py-10 flex flex-col items-center justify-center">
            <div className="text-center">
                <h1 className="text-2xl font-bold mb-5 max-w-sm">
                    {anime.title.english
                        ? anime.title.english
                        : anime.title.romaji}
                </h1>
            </div>
            <div className="">
                <img
                    src={anime.coverImage.large}
                    alt="animeCover"
                    className="w-72 h-96 object-cover rounded-lg"
                />
                <button onClick={onSubmit} type="submit" className="submit">
                    Add to list
                </button>
            </div>
        </div>
    );
}

export default AnimeDetailHeader;
