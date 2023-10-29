import { useMutation, useQueryClient } from "react-query";
import axiosClient from "../axios-client";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function useStoreAnime(queryKey) {
    const queryClient = useQueryClient();

    const storeAnimeRequest = async (payload) => {
        const response = await axiosClient.post("/anime", payload);
        return response.data;
    };

    const storeAnime = useMutation(storeAnimeRequest, {
        onMutate: async () => {
            await queryClient.cancelQueries(queryKey);
            // Maybe add optimistic update here, so there is no delay to the edit button
        },
        onSuccess: (data) => {
            toast.success(data);
        },
        onError: (error, variables, context) => {
            toast.success("Failed to add anime !");
        },
        onSettled: () => {
            queryClient.invalidateQueries(queryKey);
        },
    });

    return { storeAnime };
}

export default useStoreAnime;
