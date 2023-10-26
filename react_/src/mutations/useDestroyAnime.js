import { useMutation, useQueryClient } from "react-query";
import axiosClient from "../axios-client";

function useDestroyAnime(queryKey) {
    const queryClient = useQueryClient();

    const destroyAnimeRequest = async (id) => {
        const response = await axiosClient.delete(`/anime/${id}`);
        return response.data;
    };

    const destroyAnime = useMutation(destroyAnimeRequest, {
        onMutate: async () => {
            await queryClient.cancelQueries(queryKey);
        },
        onError: (error, variables, context) => {
            //
        },
        onSettled: () => {
            queryClient.invalidateQueries(queryKey);
        },
    });

    return { destroyAnime };
}

export default useDestroyAnime;
