import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import { useNavigate } from "react-router-dom";

import Divider from "../../components/Divider";
import CardProduct from "../../components/CardProduct";
import SubItem from "../../components/AdminComponents/SubItem";

import { useGetMenus } from "../../api/MenuAPI";
import { useGetTransaksi } from "../../api/TransaksiAPI";
import { useEditDetail, useGETdetailMenu } from "../../api/DetailmenuAPI";

const KasirTransaksi = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token);
    const [errorDetail, setErrorDetail] = useState(null);
    const [dataForm, setDataFom] = useState({
        order_menu: [],
    });

    // API Function^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    // Get Menu Data=================================
    const {
        data: menuData,
        error: menuError,
        isLoading: menuLoading,
    } = useGetMenus();
    // Get Menu Data=================================

    // Get Meja Data=================================
    const {
        data: transaksi,
        error: transaksiError,
        isLoading: transaksiLoading,
    } = useGetTransaksi(id.toString());
    // Get Meja Data=================================

    // Get Detail Transaksi Data=================================
    const {
        data: detailTransaksi,
        error: detailTransaksiError,
        isLoading: detailTransaksiLoading,
    } = useGETdetailMenu(transaksi?._id);
    // Get Detail Transaksi Data=================================

    // Edit Detailtransaksi Data========================
    const PHeditdetail = useEditDetail();
    // Edit Detailtransaksi Data========================

    // Logic hanlde menu check#######################
    const [selectedMenu, setSelectedMenu] = useState([]);
    const handleSelectMenu = (menu) => {
        setSelectedMenu((prevSelectedMenu) => {
            const existingItem = prevSelectedMenu.find(
                (item) => item.menu._id === menu._id
            );
            if (existingItem) {
                return prevSelectedMenu.filter(
                    (item) => item.menu._id !== menu._id
                );
            } else {
                return [...prevSelectedMenu, { menu, quantity: 1 }];
            }
        });
    };
    // Logic hanlde menu check#######################

    // Logic total harga#######################
    const handleQuantity = (index, increment) => {
        setSelectedMenu((prevSelectedMenu) => {
            return prevSelectedMenu
                .map((item, i) => {
                    if (i === index) {
                        const newQuantity = increment
                            ? item.quantity + 1
                            : item.quantity - 1;
                        return {
                            ...item,
                            quantity: newQuantity > 0 ? newQuantity : 0,
                        };
                    }
                    return item;
                })
                .filter((item) => item.quantity > 0);
        });
    };
    // Logic total harga#######################

    // Update dataForm when selectedMenu changes
    useEffect(() => {
        setDataFom({
            order_menu: selectedMenu.map((item) => ({
                id_menu: item.menu._id,
                kuantitas: item.quantity,
            })),
        });
    }, [selectedMenu]);

    if (menuLoading || transaksiLoading || detailTransaksiLoading)
        return "Loading...";
    if (menuError) return "An error has occurred on menu: " + menuError.message;
    if (transaksiError)
        return "An error has occurred on transaksi: " + transaksiError.message;
    if (detailTransaksiError)
        return (
            "An error has occurred on detail transaksi: " +
            detailTransaksiError.message
        );

    console.log(transaksi);
    console.log("Ini detailtansaksi" + detailTransaksi);
    console.log(detailTransaksi._id);
    console.log(typeof detailTransaksi._id);

    const handleEditDetail = (e) => {
        e.preventDefault();
        if (dataForm.order_menu.length === 0) {
            return setErrorDetail("Menu order cannot be empty");
        }
    
        PHeditdetail.mutate(
            { id: detailTransaksi._id, data: { order_menu: dataForm.order_menu } },
            {
                onSuccess: (data) => {
                    console.log(data);
                    setErrorDetail(null);
                    navigate("/kasir/history");
                },
                onError: (error) => {
                    console.log(error);
                    setErrorDetail(error.message || "Update failed");
                },
            }
        );
    };
    

    return (
        <div className="w-full flex flex-col bg-blue-300">
            {selectedMenu.map((item) => (
                <div key={item.menu._id}>
                    {JSON.stringify(item.menu._id)} <br />
                    {JSON.stringify(item.quantity)}
                </div>
            ))}
            {JSON.stringify(typeof dataForm)}
            <br />
            {JSON.stringify(dataForm)}
            <div className=" z-[10] w-[50em]  flex flex-col gap-10 bg-yellow-300">
                <div className="">
                    <div className="font-semibold text-lg">Nama Pelanggan</div>
                    <div className="font-light text-sm text-gray-900">
                        {transaksi.nama_pelanggan}
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h1>List Produk</h1>
                    <ul className="flex gap-5">
                        <li>
                            <button>All</button>
                        </li>
                        <li>
                            <button>Makanan</button>
                        </li>
                        <li>
                            <button>Minuman</button>
                        </li>
                    </ul>
                    {/* Container Card */}
                    <div className="flex justify-start flex-wrap gap-5">
                        {menuData.data.map((product, index) => (
                            <CardProduct
                                key={index}
                                {...product}
                                onClick={() => {
                                    handleSelectMenu(product);
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Sidebar Detailtransaksi */}
            <div className="bg-black h-screen fixed w-[20rem] z-[10] -right-0 -top-0 text-white flex flex-col">
                <h1 className="bg-blue-50 mt-7">Nav top</h1>
                <div className="flex justify-between items-center p-5">
                    <h1 className="font-semibold text-[1em]">
                        {/* {mejaData.nama_meja} */}
                    </h1>
                    <span className="font-light text-[.8em] self-end">
                        {decoded.username} - {decoded.role}
                    </span>
                </div>
                <h1 className="font-semibold text-[1em]">Order Items</h1>
                <Divider color="gray" />
                <div className="flex flex-col gap-3 p-5 h-[20em] overflow-y-scroll">
                    {selectedMenu.map((item, index) => (
                        <SubItem
                            key={index}
                            gambar_sub={item.menu.gambar_menu}
                            nama_sub={item.menu.nama_menu}
                            harga_sub={item.menu.harga_menu}
                            quantity={item.quantity}
                            handleQuantity={handleQuantity}
                            index={index}
                        />
                    ))}
                </div>
                <Divider color="gray" />
                <div className="p-5 flex justify-between text-[14px] font-light">
                    <span>Total Pembayaran</span>
                    <span>
                        Rp.{" "}
                        {selectedMenu.reduce(
                            (total, item) =>
                                total + item.menu.harga_menu * item.quantity,
                            0
                        )}
                    </span>
                </div>
                <button
                    onClick={handleEditDetail}
                    className="bg-orange hover:contrast-50 self-center px-3 py-2 rounded-lg"
                >
                    Edit Detailmenu
                </button>
            </div>
        </div>
    );
};

export default KasirTransaksi;