import { useMutation, useQueryClient } from "react-query";
import axiosClient from "../clients/axios-client";

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
                return oldData.map((anime_) => {
                    if (anime_.anime_id === updatedAnimeData.anime_id) {
                        return updatedAnimeData;
                    }
                    return anime_;
                });
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
