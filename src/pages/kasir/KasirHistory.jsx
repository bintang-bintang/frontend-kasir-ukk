import React from "react";
import { useBayarTransaksi, useGetTransaksis } from "../../api/TransaksiAPI";
import { useNavigate } from "react-router-dom";

const KasirHistory = () => {
    const { data, error, isLoading } = useGetTransaksis();
    const navigate = useNavigate();

    const handleDetail = (id) => {
        navigate(`/kasir/detailtransaksi/${id}`);
    };
    const PHbayartransaksi = useBayarTransaksi();
    const handleBayar = (id) => {
        // id.preventDefault();
        PHbayartransaksi.mutate(id, {
            onSuccess: (data) => {
                console.log(data);
                setError(null);
                navigate("/kasir/history");
            },
            onError: (error) => {
                setError(error);
                console.log(error);
            },
        });
    };
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    console.log(data);

    // Check if data is an array
    if (!Array.isArray(data)) {
        return <p>Data is not available</p>;
    }

    return (
        <div className="w-[60em] gap-1 bg-white2 drop-shadow-md rounded-md">
            <nav className="flex justify-between items-center p-5">
                <h1 className="font-semibold text-lg">Detail Order History</h1>
            </nav>
            <section className="drop-shadow rounded-[4px] flex justify-center font-light">
                <div className="bg-gray/25 fixed z-10 w-full p-6"></div>
                <table className="w-full table-auto border-collapse z-20">
                    <thead className="text-gray">
                        <tr className="bg-gray-700 text-[#707070]">
                            <th className="p-3 text-start">Tanggal & Waktu</th>
                            <th className="p-3 text-start">Customer</th>
                            <th className="p-3 text-start">Meja</th>
                            <th className="p-3 text-start">Status Transaksi</th>
                            <th className="p-3 text-start">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="gap-5">
                        {data.map((history) => (
                            <tr key={history._id}>
                                <td className="p-3">
                                    {new Date(
                                        history.createdAt
                                    ).toLocaleString()}
                                </td>
                                <td className="p-3">
                                    {history.nama_pelanggan}
                                </td>
                                <td className="p-3">
                                    {history.id_meja.nama_meja}
                                </td>
                                <td className="p-3">
                                    {history.status_transaksi}
                                </td>
                                <td className="p-3 flex gap-5">
                                    {history.status_transaksi === "lunas" ? (
                                        <>
                                            <button className="bg-netral cursor-default  text-white px-3 py-1 rounded-md">
                                                Bayar
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button
                                                onClick={() => {
                                                    handleBayar(history._id);
                                                }}
                                                className="bg-blue-500 text-white px-3 py-1 rounded-md"
                                            >
                                                Bayar
                                            </button>
                                        </>
                                    )}

                                    <button
                                        onClick={() => {
                                            handleDetail(history._id);
                                        }}
                                        className="bg-blue-500 text-white px-3 py-1 rounded-md"
                                    >
                                        Detail
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default KasirHistory;
