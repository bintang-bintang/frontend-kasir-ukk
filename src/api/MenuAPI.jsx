import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// const token = localStorage.getItem("token");
// const headers = {
//     authorization: `Bearer ${token}`,
// };

// ==============================CREATE menu==============================
const createMenuFN = async (data) => {
    const response = await axios.post(
        import.meta.env.VITE_DB + "/menu/add",
        data
    );
    return response;
};

export const useCreateMenu = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createMenuFN,
        onSuccess: () => {
            queryClient.invalidateQueries("menu");
        },
    });
};
// ==============================CREATE menu==============================

// ==============================READ menus==============================
const getMenusFN = async () => {
    const { data } = await axios.get(import.meta.env.VITE_DB + "/menu");
    return data;
};

export const useGetMenus = () => {
    return useQuery({
        queryKey: ["menu"],
        queryFn: getMenusFN,
    });
};
// ==============================READ menu==============================

// ==============================READ menu==============================
const getMenuFN = async (id) => {
    const { data } = await axios.get(import.meta.env.VITE_DB + `/menu/${id}`);
    return data;
};

export const useGetMenu = () => {
    return useQuery({
        queryKey: ["menu"],
        queryFn: getMenuFN,
    });
};
// ==============================READ menus==============================

// ==============================UPDATE menu==============================
const updateMenuFN = async ({ id, data }) => {
    const response = await axios.put(
        import.meta.env.VITE_DB + `/menu/upd/${id}`,
        data,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );
    return response.data;
};

export const useUpdateMenu = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: updateMenuFN,
        onSuccess: () => {
            queryClient.invalidateQueries("menu");
        },
    });
};
// ==============================UPDATE menu==============================

// ==============================DELETE menu==============================
const deleteMenuFN = async (id) => {
    const { data: response } = await axios.delete(
        import.meta.env.VITE_DB + `/menu/del/${id}`
    );
    return response;
};

export const useDeleteMenu = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteMenuFN,
        onSuccess: () => {
            queryClient.invalidateQueries("menu");
        },
    });
};
// ==============================DELETE menu==============================
