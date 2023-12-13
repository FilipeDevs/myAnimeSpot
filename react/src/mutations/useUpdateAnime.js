import { useMutation, useQueryClient } from "react-query";
import axiosClient from "../clients/axios-client";
import "react-toastify/dist/ReactToastify.css";

function useUpdateAnime(queryKey) {
    const queryClient = useQueryClient();

    const updateAnimeRequest = async (payload) => {
        const response = await axiosClient.put(
            `/anime/${payload.id}/update`,
            payload
        );
        return response.data;
    };

    const updateAnime = useMutation(updateAnimeRequest, {
        onMutate: async (updatedAnimeData) => {
            await queryClient.cancelQueries(queryKey);
            const previousAnimeData = queryClient.getQueryData(queryKey);

            queryClient.setQueryData(queryKey, (oldData) => {
                /**
                 * The condition is necessary to check if the data from the api is an array.
                 * When retrieving a single anime list from the user (ex: wathcing list), the response
                 * is an array, but when retrieving all lists from the user (ex: watching, planned, etc) the
                 * response is an object.
                 */
                if (Array.isArray(oldData)) {
                    // Handle array data
                    return oldData.map((anime_) => {
                        if (anime_.anime_id === updatedAnimeData.anime_id) {
                            return updatedAnimeData;
                        }
                        return anime_;
                    });
                } else if (typeof oldData === "object") {
                    // Handle object data
                    const newData = { ...oldData };
                    Object.keys(newData).forEach((list) => {
                        newData[list] = newData[list].map((anime_) => {
                            if (anime_.anime_id === updatedAnimeData.anime_id) {
                                return updatedAnimeData;
                            }
                            return anime_;
                        });
                    });
                    return newData;
                }
                return oldData;
            });

            return { previousAnimeData };
        },
        onError: (error, variables, context) => {
            queryClient.setQueryData(queryKey, context.previousAnimeData);
        },
        onSettled: () => {
            queryClient.invalidateQueries(queryKey);
        },
    });

    return { updateAnime };
}

export default useUpdateAnime;
