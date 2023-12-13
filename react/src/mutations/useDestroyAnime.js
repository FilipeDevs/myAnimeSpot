import { useMutation, useQueryClient } from "react-query";
import axiosClient from "../clients/axios-client";

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
        onSettled: () => {
            queryClient.invalidateQueries(queryKey);
        },
    });

    return { destroyAnime };
}

export default useDestroyAnime;
