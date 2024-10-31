import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

// ======================GET ALL TRANSAKSI======================

const getTransaksisFN = async () => {
    const { data } = await axios.get(import.meta.env.VITE_DB + "/transaksi");
    return data.data;
};

export const useGetTransaksis = () => {
    return useQuery({
        queryKey: ["transaksi"],
        queryFn: getTransaksisFN,
    });
};

// ======================GET ALL TRANSAKSI======================
// ======================GET TRANSAKSI======================
const getTransaksiFN = async (id) => {
    const { data } = await axios.get(
        import.meta.env.VITE_DB + `/transaksi/${id}`
    );
    return data.data;
};

export const useGetTransaksi = (id) => {
    return useQuery({
        queryKey: ["transaksi", id],
        queryFn: () => getTransaksiFN(id),
    });
};

// ======================GET TRANSAKSI======================

// Create TransaksiAPI ========================================================================
const transaksiFN = async (data) => {
    const response = await axios.post(
        `${import.meta.env.VITE_DB}/transaksi`,
        data
    );
    return response.data;
};

export const useCreateTransaksi = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: transaksiFN,
        onSuccess: () => {
            queryClient.invalidateQueries("transaksi");
        },
    });
};
// Create TransaksiAPI ========================================================================

// ======================UPDATE TRANSAKSI======================
const bayarTransaksiFN = async (id) => {
    const response = await axios.put(
        `${import.meta.env.VITE_DB}/transaksi/bayar/${id}`
    );
    return response.data;
};

export const useBayarTransaksi = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: bayarTransaksiFN,
        onSuccess: () => {
            queryClient.invalidateQueries("transaksi");
        },
    });
};
// ======================UPDATE TRANSAKSI======================
