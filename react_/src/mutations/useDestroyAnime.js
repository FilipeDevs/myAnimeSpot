import { useMutation, useQueryClient } from "react-query";
import axiosClient from "../axios-client";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        onSuccess: (data) => {
            toast.success(data);
        },
        onError: (error, variables, context) => {
            toast.error("Failed to delete Anime !");
        },
        onSettled: () => {
            queryClient.invalidateQueries(queryKey);
        },
    });

    return { destroyAnime };
}

export default useDestroyAnime;
