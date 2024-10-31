import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useBayarTransaksi, useGetTransaksi } from "../../api/TransaksiAPI";
import { useGETdetailMenu } from "../../api/DetailmenuAPI";

const KasirDetailTransaksi = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const { id } = useParams();
    const {
        data: transaksi,
        error: transaksiError,
        isLoading: transaksiLoading,
    } = useGetTransaksi(id.toString());

    const {
        data: detailmenu,
        error: detailmenuError,
        isLoading: detailmenuLoading,
    } = useGETdetailMenu(transaksi?._id);

    const PHbayartransaksi = useBayarTransaksi();
    const handleBayar = (e) => {
        e.preventDefault();
        PHbayartransaksi.mutate(transaksi?._id, {
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

    if (transaksiLoading) return "Loading...";
    if (transaksiError)
        return "An error has occurred: " + transaksiError.message;
    if (detailmenuLoading) return "Loading...";
    if (detailmenuError)
        return "An error has occurred: " + detailmenuError.message;
    const date = new Date(transaksi.createdAt);
    const formattedDate = date.toLocaleDateString("id-ID", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });

    var total = 0;

    const handleLanjut = () => {
        navigate("/kasir/transaksi/" + id);
    };

    return (
        <>
            <h1 className="mb-5 justify-center font-bold text-[24px]">
                <button type="button" onClick={() => navigate(-1)}>
                    <span className="font-bold text-orange">&larr;</span>
                </button>{" "}
                Informasi Pesanan
            </h1>
            <div className="flex flex-col gap-5 text-black">
                <div className="flex flex-col gap-5">
                    <h2>id transaksi: {transaksi._id}</h2>
                    <h2 className="font-semibold">Tanggal: {formattedDate}</h2>
                    <div className="flex gap-10">
                        <div className="">
                            <span className="font-semibold text-[18px] text-orange">
                                Kasir: <br />
                            </span>
                            <span>
                                {transaksi.id_user.username} -{" "}
                                {transaksi.id_user.role}
                            </span>
                        </div>
                        <div className="">
                            <span className="font-semibold text-[18px] text-orange">
                                Nama Pelanggan: <br />
                            </span>
                            <span>{transaksi.nama_pelanggan}</span>
                        </div>
                        <div className="">
                            <span className="font-semibold text-[18px] text-orange">
                                Meja: <br />
                            </span>
                            <span>{transaksi.id_meja.nama_meja}</span>
                        </div>
                    </div>
                    <div className="flex gap-5 items-center ">
                        <span>Status Pembayaran:</span>
                        {transaksi.status_transaksi === "lunas" ? (
                            <div className="flex gap-5 px-3 py-2 text-white2 rounded-md bg-success">
                                <span>{transaksi.status_transaksi}</span>
                            </div>
                        ) : (
                            <div className="flex gap-5 px-3 py-2 rounded-md text-white2 bg-danger">
                                <span>{transaksi.status_transaksi}</span>
                            </div>
                        )}
                    </div>
                </div>

                <div className="">
                    <h1>Order Menu</h1>
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 text-start border-b border-gray">
                                    Nama Menu
                                </th>
                                <th className="py-2 px-4 text-start border-b border-gray">
                                    Jenis Menu
                                </th>
                                <th className="py-2 px-4 text-start border-b border-gray">
                                    Harga Menu
                                </th>
                                <th className="py-2 px-4 text-start border-b border-gray">
                                    Kuantitas
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-black">
                            {detailmenu.order_menu.map((item) => (
                                <>
                                    <tr key={item.id_menu._id}>
                                        <td className="py-2 px-4 border-b border-gray">
                                            {item.id_menu.nama_menu}
                                        </td>
                                        <td className="py-2 px-4 border-b border-gray">
                                            {item.id_menu.jenis_menu}
                                        </td>
                                        <td className="py-2 px-4 border-b border-gray">
                                            Rp {item.id_menu.harga_menu}
                                        </td>
                                        <td className="py-2 px-4 border-b border-gray">
                                            {item.kuantitas}
                                        </td>
                                    </tr>
                                    <span className="-right-[100em] fixed text-transparent">
                                        {
                                            (total +=
                                                item.id_menu.harga_menu *
                                                item.kuantitas)
                                        }
                                    </span>
                                </>
                            ))}
                        </tbody>
                    </table>
                    <h2 className="font-bold mt-5 text-[20px]">Total: {total}</h2>
                </div>
                <div className="flex text-white2 justify-evenly">
                    {transaksi.status_transaksi === "lunas" ? (
                        <div className=""></div>
                    ) : (
                        <div className="flex gap-5 px-3 py-2 rounded-md text-white2 ">
                            <button
                                type="button"
                                onClick={handleBayar}
                                className="px-32 hover:contrast-50 py-2 bg-none text-orange outline outline-1 rounded-md"
                            >
                                Bayar
                            </button>
                            <button
                                type="button"
                                onClick={handleLanjut}
                                className="px-32 hover:contrast-50 py-2 bg-orange rounded-md"
                            >
                                Lanjut
                            </button>{" "}
                        </div>
                    )}
                </div>
                {error && <p>{error.message}</p>}
            </div>
        </>
    );
};

export default KasirDetailTransaksi;
