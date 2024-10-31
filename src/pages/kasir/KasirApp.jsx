import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarKasir from "../../components/KasirComponents/NavbarKasir";
import SidebarKasir from "../../components/KasirComponents/SidebarKasir";

import KasirOrder from "./KasirOrder";
import KasirHistory from "./KasirHistory";
import KasirHome from "./KasirHome";
import KasirTransaksi from "./KasirTransaksi";
import KasirDetailTransaksi from "./KasirDetailTransaksi";

const KasirApp = () => {
    return (
        <div className="absolute h-screen w-[100%] -z-10 bg-white">
            <div className="w-[100%] h-max bg-white z-[1] ">
                <NavbarKasir />
                <SidebarKasir>
                    <Routes>
                        <Route path="/" element={<KasirHome />} />


                        <Route path="/orders" element={<KasirOrder />} />
                        <Route path="transaksi/:id" element={<KasirTransaksi />} />
                        <Route path="detailtransaksi/:id" element={<KasirDetailTransaksi />} />


                        <Route path="/history" element={<KasirHistory />} />
                    </Routes>
                </SidebarKasir>
            </div>
        </div>
    );
};

export default KasirApp;
