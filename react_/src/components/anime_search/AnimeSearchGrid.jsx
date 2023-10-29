import React, { useEffect } from "react";
import { useInfiniteQuery, useQueryClient } from "react-query";
import apolloClient from "../../apollo-client";
import searchAnimeQuery from "../../queries/searchqlQueries";
import AnimeSearchCard from "./AnimeSearchCard";
import { useLocation } from "react-router-dom";
import Loading from "../Loading";
import NothingFound from "../NothingFound";
import Error from "../../views/Error";

function AnimeSearchGrid() {
    const location = useLocation();
    const queryParams = {};
    const urlSearchParams = new URLSearchParams(location.search);

    for (const [key, value] of urlSearchParams.entries()) {
        queryParams[key] = value;
    }

    const queryClient = useQueryClient();

    useEffect(() => {
        return () => {
            /**
             * Clear the query cache when the component unmounts.
             * This is important to ensure that React Query doesn't store and
             * reuse previously loaded content when the user navigates away from
             * this page and returns. Without clearing the cache, the additional
             * loaded content would be retained, resulting in unnecessary API
             * requests and potential data redundancy.
             */
            queryClient.removeQueries("searchAnime");
        };
    }, []);

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        error,
    } = useInfiniteQuery(
        "searchAnime",
        async ({ pageParam = 1 }) => {
            const response = await apolloClient.query({
                query: searchAnimeQuery,
                variables: {
                    page: pageParam,
                    perPage: 15,
                    ...queryParams,
                },
            });
            return response.data.Page.media;
        },
        {
            getNextPageParam: (lastPage, allPages) => {
                const nextPage =
                    lastPage.length > 0 ? allPages.length + 1 : null;
                return nextPage;
            },
        }
    );

    if (isLoading) return <Loading />;
    if (error) return <Error />;

    return (
        <div className="mb-10">
            <div className="flex flex-col items-center justify-center py-6">
                {data.pages[0]?.length === 0 && <NothingFound />}
                <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-1 sm:grid-cols-1">
                    {data.pages.map((page, pageIndex) => (
                        <React.Fragment key={pageIndex}>
                            {page.map((anime) => (
                                <AnimeSearchCard
                                    key={anime.id}
                                    id={anime.id}
                                    image={anime.coverImage.large}
                                    title={[
                                        anime.title.english,
                                        anime.title.romaji,
                                    ]}
                                    description={anime.description}
                                    genres={anime.genres}
                                    seasonYear={anime.seasonYear}
                                    season={anime.season}
                                />
                            ))}
                        </React.Fragment>
                    ))}
                </div>
                {hasNextPage && (
                    <button
                        className="px-3 py-2 mt-2 text-sm font-medium text-white bg-blue-700 rounded hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={() => fetchNextPage()}
                        disabled={isFetchingNextPage}
                    >
                        {isFetchingNextPage ? "Loading..." : "Load More"}
                    </button>
                )}
            </div>
        </div>
    );
}

export default AnimeSearchGrid;
