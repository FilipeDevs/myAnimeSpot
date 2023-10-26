import { useMutation, useQueryClient } from "react-query";
import axiosClient from "../axios-client";

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
        onError: (error, variables, context) => {
            //
        },
        onSettled: () => {
            queryClient.invalidateQueries(queryKey);
        },
    });

    return { storeAnime };
}

export default useStoreAnime;
