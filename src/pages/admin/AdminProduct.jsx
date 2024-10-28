import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import CardProduct from "../../components/CardProduct";
import { dataProduct } from "../../assets/dataProduct";
import { useGetMenus } from "../../api/MenuAPI";
import ModalAddMenu from "../../components/AdminComponents/modal/ModalAddMenu";
import ModalPreviewMenu from "../../components/AdminComponents/modal/ModalPreviewMenu";

const AdminProduct = () => {
    const { data, error, isLoading } = useGetMenus();
    const [select, setSelect] = useState("All");
    const [search, setSearch] = useState("");
    const menuTypes = ["All", "Food", "Drink"]; // Types of menu

    // =================Add modal=================
    const [statusAdd, setStatusAdd] = useState(false);
    const handleAddModal = () => {
        setStatusAdd(!statusAdd);
    };
    // =================Add modal=================
    // =================Previe modal=================
    const [statusPreview, setStatusPreview] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState(null);
    const handlePreviewModal = () => {
        setStatusPreview(!statusPreview);
    };
    // =================Previe modal=================

    const renderButton = (label) => (
        <input
            onClick={() => setSelect(label)}
            type="button"
            value={label}
            className={
                select === label
                    ? "cursor-pointer pb-1 text-brown font-semibold underline underline-offset-8 "
                    : "cursor-pointer pb-1 text-black font-semibold hover:underline-offset-8 hover:text-brown"
            }
        />
    );

    const dataFilter = dataProduct.filter((e) => {
        const filterSearch = e.nama_menu
            .toLowerCase()
            .includes(search.toLowerCase());
        const filterSelect =
            select === "All" ||
            e.jenis_menu.toLowerCase().includes(select.toLowerCase());
        return filterSearch && filterSelect;
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    console.log(data);

   
    return (
        <div className="w-[60em] p-4 flex flex-col gap-1">
            {/* Modals */}
            {statusAdd && (
                <ModalAddMenu click={handleAddModal} status={statusAdd} />
            )}
            {statusPreview && (
                <ModalPreviewMenu
                    click={handlePreviewModal}
                    status={statusPreview}
                    selectedMenu={selectedMenu}
                />
            )}
            {/* Modals */}
            <nav className="flex justify-between items-center mb-4">
                <h1 className="font-semibold text-lg">Product Data</h1>
                <div className="relative flex space-x-2 items-center">
                    <div className="relative flex items-center">
                        <span className="absolute left-2">
                            <CiSearch size={20} className="text-black z-10" />
                        </span>
                        <input
                            type="text"
                            className="outline outline-1 outline-gray px-8 h-10 flex items-center placeholder:text-[14px]"
                            placeholder="Search..."
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        {search}
                    </div>
                    <button
                        onClick={handleAddModal}
                        type="button"
                        className="bg-brown text-white px-4 py-2 rounded hover:saturate-50"
                    >
                        Add New!
                    </button>
                </div>
            </nav>
            <span className="flex gap-5 mb-3 justify-start">
                {/* Looping tipe select */}
                {menuTypes.map((type, index) => (
                    <React.Fragment key={index + 1}>
                        {renderButton(type)}
                    </React.Fragment>
                ))}{" "}
            </span>

            <section className="flex justify-start flex-wrap gap-5">
                {data.data.map((product, index) => (
                    <CardProduct
                        key={index}
                        {...product}
                        onClick={() => {
                            handlePreviewModal();
                            setSelectedMenu(product);
                        }}
                    />
                ))}
                <img src={import.meta.env.VITE_DB + ""} alt="" />
            </section>
        </div>
    );
};

export default AdminProduct;
