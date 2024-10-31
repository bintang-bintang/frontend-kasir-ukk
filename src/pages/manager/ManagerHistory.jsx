import React, { useState } from "react";
import { useGetTransaksis } from "../../api/TransaksiAPI";

const ManagerHistory = () => {
    const [tanggal, setTanggal] = useState("");
    const { data: Transaksi, error, isLoading } = useGetTransaksis();

    if (isLoading) return "Loading...";
    if (error) return "An error has occurred: " + error.message;

    // Filter transaksi berdasarkan tanggal yang dipilih
    const filteredTransaksi = Transaksi.filter((transaksi) => {
        const transaksiDate = new Date(transaksi.createdAt).getDate();
        const selectedDate = new Date(tanggal).getDate();
        return tanggal === "" || transaksiDate === selectedDate;
    });

    // Urutkan transaksi berdasarkan waktu secara ascending
    const sortedTransaksi = filteredTransaksi.sort((a, b) => {
        const timeA = new Date(a.createdAt).getTime();
        const timeB = new Date(b.createdAt).getTime();
        return timeA - timeB;
    });

    return (
        <div className="flex flex-col p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Riwayat Transaksi</h1>
                <input
                    type="date"
                    value={tanggal}
                    onChange={(e) => setTanggal(e.target.value)}
                    className="border p-2 rounded"
                />
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 text-start border-b border-gray">Tanggal</th>
                            <th className="py-2 px-4 text-start border-b border-gray">Nama</th>
                            <th className="py-2 px-4 text-start border-b border-gray">Status</th>
                            <th className="py-2 px-4 text-start border-b border-gray">Operasi</th>
                        </tr>
                    </thead>
                    <tbody className="text-black">
                        {sortedTransaksi.map((transaksi) => {
                            const date = new Date(transaksi.createdAt);
                            const formattedDate = date.toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                            });
                            const formattedTime = date.toLocaleTimeString("en-US", {
                                hour: "numeric",
                                minute: "2-digit",
                                hour12: false,
                            });
                            return (
                                <tr key={transaksi._id}>
                                    <td className="py-2 px-4 border-b border-gray">
                                        {formattedDate}
                                        <br />
                                        <span className="font-light">{formattedTime}</span>
                                    </td>
                                    <td className="py-2 px-4 border-b border-gray">
                                        {transaksi.nama_pelanggan}
                                    </td>
                                    <td className="py-2 px-4 border-b border-gray">
                                        {transaksi.status_transaksi}
                                    </td>
                                    <td className="py-2 px-4 border-b border-gray">
                                        <button
                                            type="button"
                                            className="bg-blue-400 rounded-md px-3 py-2 text-white2 hover:contrast-50"
                                        >
                                            Lihat!
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManagerHistory;