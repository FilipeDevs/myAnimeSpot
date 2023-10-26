import { useMutation, useQueryClient } from "react-query";
import axiosClient from "../axios-client";

function useStoreAnime() {
    const queryClient = useQueryClient();

    const storeAnimeRequest = async (payload) => {
        const response = await axiosClient.post("/anime", payload);
        return response.data;
    };

    const storeAnime = useMutation(storeAnimeRequest, {
        onError: (error, variables, context) => {
            //
        },
        onSettled: () => {
            // Refetch if current anime is in the user's list
        },
    });

    return { storeAnime };
}

export default useStoreAnime;
