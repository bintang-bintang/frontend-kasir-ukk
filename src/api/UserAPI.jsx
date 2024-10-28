import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
const token = localStorage.getItem("token");
const headers = {
    authorization: `Bearer ${token}`,
};

/*
1. Create user
2. Read users
3. Read user
4. Update user
5. Delete user
*/

// ==============================CREATE menus==============================
const createUserFN = async (data) => {
    const response = await axios.post(
        import.meta.env.VITE_DB + "/user/add",
        data
    );
    return response.data;
};

export const useCreateUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createUserFN,
        onSuccess: () => {
            queryClient.invalidateQueries(["user"]);
        },
    });
};
// ==============================CREATE menus==============================

// ==============================READ menus==============================
const usersFN = async () => {
    const { data } = await axios.get(import.meta.env.VITE_DB + "/user");
    return data;
};

// Custom hook untuk fetching data user
export const useUsersGet = () => {
    return useQuery({
        queryKey: ["user"],
        queryFn: usersFN,
    });
};
// ==============================READ menus==============================

// ==============================UPDATE menus==============================
const updateUserFN = async ({id, data}) => {
    const response = await axios.put(
        import.meta.env.VITE_DB + `/user/upd/${id}`,
        data
    );
    return response.data;
};

export const useUpdateUserMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: updateUserFN,
        onSuccess: () => {
            queryClient.invalidateQueries(["user"]);
        },
    });
};
// ==============================UPDATE menus==============================

// ==============================DELETE menus==============================
const deleteUserFN = async (userId) => {
    const response = await axios.delete(
        import.meta.env.VITE_DB + `/user/del/${userId}`
    );
    return response.data;
};

export const useDeleteUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteUserFN,
        onSuccess: () => {
            queryClient.invalidateQueries(["user"]);
        },
    });
};
// ==============================DELETE menus==============================
