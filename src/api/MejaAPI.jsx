import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
const token = localStorage.getItem("token");
const headers = {
    authorization: `Bearer ${token}`,
};

// ==============================CREATE meja==============================
const createMejaFN = async (data) => {
    const { data: response } = await axios.post(import.meta.env.VITE_DB + "/meja/add", data);
    return response;
}

export const useCreateMeja = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createMejaFN,
        onSuccess: () => {
            queryClient.invalidateQueries("meja");
        }
    });
}
// ==============================CREATE meja==============================

// ==============================READ mejas==============================
const getMejasFN = async () => {
    const { data } = await axios.get(import.meta.env.VITE_DB + "/meja");
    return data;
}

export const useGetMejas = () => {
    return useQuery({
        queryKey: ["meja"],
        queryFn: getMejasFN,
    });
}
// ==============================READ meja==============================

// ==============================READ meja==============================
const getMejaFN = async (id) => {
    const { data } = await axios.get(import.meta.env.VITE_DB + `/meja/${id}`);
    return data;
}

export const useGetMeja = () => {
    return useQuery({
        queryKey: ["meja"],
        queryFn: getMejaFN,
    });
}
// ==============================READ mejas==============================

// ==============================UPDATE meja==============================
const updateMejaFN = async (id) => {
    const { data: response } = await axios.put(import.meta.env.VITE_DB + `/meja/upd/${id}`, data);
    return response;
}

export const useUpdateMeja = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: updateMejaFN,
        onSuccess: () => {
            queryClient.invalidateQueries("meja");
        }
    });
}
// ==============================UPDATE meja==============================

// ==============================DELETE meja==============================
const deleteMejaFN = async (id) => {
    const { data: response } = await axios.delete(import.meta.env.VITE_DB + `/meja/del/${id}`);
    return response;
}

export const useDeleteMeja = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteMejaFN,
        onSuccess: () => {
            queryClient.invalidateQueries("meja");
        }
    });
}
// ==============================DELETE meja==============================