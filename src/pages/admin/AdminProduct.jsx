import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import CardProduct from "../../components/CardProduct";
import { dataProduct } from "../../assets/dataProduct";

const AdminProduct = () => {
    const [select, setSelect] = useState("All");
    const [search, setSearch] = useState("");

    const menuTypes = ["All", "Food", "Drink"]; // Types of menu

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
        const filterSearch = e.nama_menu.toLowerCase().includes(search.toLowerCase())
        const filterSelect = select === "All" || e.jenis_menu.toLowerCase().includes(select.toLowerCase())
        return filterSearch && filterSelect
    });

    return (
        <div className="w-[60em] p-4 flex flex-col gap-1">
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
                        type="button"
                        className="bg-brown text-white px-4 py-2 rounded hover:saturate-50"
                    >
                        Add New!
                    </button>
                </div>
            </nav>

            <span className="flex gap-5 mb-3 justify-start">
                {/* Looping tipe select */}
                {menuTypes.map((type) => renderButton(type))}{" "}
            </span>

            <section className="flex justify-start flex-wrap gap-5">
                {dataFilter.map((item) => (
                    <CardProduct key={item.id} {...item} />
                ))}
            </section>
        </div>
    );
};

export default AdminProduct;
