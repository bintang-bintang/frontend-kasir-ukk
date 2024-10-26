import React from "react";
import { CiSearch } from "react-icons/ci";
import Divider from "../../components/Divider";

const KasirHome = () => {
    return (
        <>
            <div className="w-auto flex justify-between">
                <h1 className="font-bold text-2xl">
                    Welcome to, WikusamaCafe👋 <br /> Kasir
                </h1>
                <div className="relative flex items-center">
                    <span className="absolute left-2">
                        <CiSearch size={20} className="text-black z-10" />
                    </span>
                    <input
                        type="text"
                        className="outline outline-1 outline-gray px-8 h-10 flex items-center placeholder:text-[14px]"
                        placeholder="Search"
                    />
                </div>
            </div>
            <Divider />
        </>
    );
};

export default KasirHome;
