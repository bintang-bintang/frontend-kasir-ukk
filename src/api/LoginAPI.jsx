import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";


const loginFN = async (data) => {
    const response = await axios.post(import.meta.env.VITE_DB + "/auth", data);
    return response.data;
};

export const useUserLogin = () => {
    return useMutation({
        mutationFn: loginFN,
        onSuccess: (data) => {
            // Simpan token JWT di localStorage
            localStorage.setItem("token", data.token);

            // Navigasi ke halaman "/home" setelah login sukses
        }
    });
};
