import axiosClient from "../../axios-client";

function AnimeDetailHeader({
    id,
    coverImage,
    title,
    description,
    status,
    epTime,
    startDate,
    season,
    seasonYear,
    genres,
    episodes,
}) {
    const onSubmit = (event) => {
        event.preventDefault();
        const payload = {
            anime_id: id,
            episodes: episodes,
            ep_duration: epTime,
        };

        axiosClient
            .post("/anime", payload)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="py-10 flex flex-col items-center justify-center">
            <div className="text-center">
                <h1 className="text-2xl font-bold mb-5 max-w-sm">
                    {title.english ? title.english : title.romaji}
                </h1>
            </div>
            <div className="">
                <img
                    src={coverImage}
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
