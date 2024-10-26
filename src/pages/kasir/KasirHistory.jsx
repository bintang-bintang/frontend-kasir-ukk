import React from "react";
import { dataHistory } from "../../assets/dataHistory";

const KasirHistory = () => {
    return (
        <div className="w-[60em] gap-1 bg-white2 drop-shadow-md rounded-md">
            <nav className="flex justify-between items-center p-5">
                <h1 className="font-semibold text-lg">Detail Order History</h1>
            </nav>
            <section className="drop-shadow rounded-[4px] flex justify-center font-light">
                <div className="bg-gray/25 fixed z-10 w-full p-6"></div>
                <table className="w-[90%] table-auto border-collapse z-20">
                    <thead className="text-gray">
                        <tr className="bg-gray-700 text-[#707070]">
                            <th className="p-3 text-start">Tanggal & Waktu</th>
                            <th className="p-3 text-start">Customer</th>
                            <th className="p-3 text-start">Total</th>
                            <th className="p-3 text-start">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="gap-5">
                        {dataHistory.map((history) => (
                            <tr key={history.id} className=" ">
                                <td className="p-3 text-start">
                                    {history.tanggal}
                                </td>
                                <td className="p-3 text-start">
                                    {history.nama_customer}
                                </td>
                                <td className="p-3 text-start">
                                    Rp.{history.total_harga}
                                </td>
                                <td className="p-3 text-start flex gap-3">
                                    <button className="bg-green-500  px-2 py-1 text-white rounded-md">
                                        See Order
                                    </button>
                                    <button className="bg-green-500  px-2 py-1 text-white rounded-md">
                                        Print
                                    </button>
                                    <button className="bg-green-500  px-2 py-1 text-white rounded-md ">
                                        Bayar
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
