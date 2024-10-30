import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

// Create DetailmenuAPI ========================================================================
const detailMenuFN = async (data) => {
    const response = await axios.post(
        `${import.meta.env.VITE_DB}/detailmenu`,
        data
    );
    return response.data;
};

export const useCreateDetail = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: detailMenuFN,
        onSuccess: () => {
            queryClient.invalidateQueries("detailmenu");
        },
    });
};
// Create DetailmenuAPI ========================================================================

// Edit DetailmenuAPI ========================================================================
const editDetailMenuFN = async ({ id, data }) => {
    if (!id || !data) throw new Error("ID or Data missing for update"); // cek id dan data
    const response = await axios.put(
        `${import.meta.env.VITE_DB}/detailmenu/${id}`,
        data
    );
    return response.data;
};

export const useEditDetail = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: editDetailMenuFN,
        onSuccess: () => {
            queryClient.invalidateQueries("detailmenu");
        },
        onError: (error) => {
            console.log(error);
        },
    });
};
// Edit DetailmenuAPI ========================================================================

// Get AllDetailmenuAPI ========================================================================
const GETdetailsMenuFN = async () => {
    const { data } = await axios.get(import.meta.env.VITE_DB + "/detailmenu");
    return data;
};

export const useGETdetailsMenu = () => {
    return useQuery({
        queryKey: ["detailmenu"],
        queryFn: GETdetailsMenuFN,
    });
};
// Get AllDetailmenuAPI ========================================================================

// Get DetailmenuAPI ========================================================================
const GETdetailMenuFN = async (id) => {
    const { data } = await axios.get(`${import.meta.env.VITE_DB}/detailmenu/detailtransaksi/${id}`);
    return data.data;
};

export const useGETdetailMenu = (id) => {
    return useQuery({
        queryFn: () => GETdetailMenuFN(id),
        queryKey: ["detailmenu", id]
    });
};
// Get DetailmenuAPI ========================================================================