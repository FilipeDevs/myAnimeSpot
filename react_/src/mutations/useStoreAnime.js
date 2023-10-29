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
        onMutate: async (newData) => {
            const oldData = queryClient.getQueryData(queryKey);
            // Update the cache optimistically
            queryClient.setQueryData(queryKey, (oldData) => {
                return [...oldData, newData];
            });

            return { oldData };
        },
        onSuccess: (data) => {
            toast.success(data);
        },
        onError: (error, variables, context) => {
            queryClient.setQueryData(queryKey, context.oldData);
            toast.error("Failed to add anime !");
        },
        onSettled: () => {
            queryClient.invalidateQueries(queryKey);
        },
    });

    return { storeAnime };
}

export default useStoreAnime;
