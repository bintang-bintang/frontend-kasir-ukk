import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHome from "./AdminHome";
import NavbarAdmin from "../../components/AdminComponents/NavbarAdmin";
import SidebarAdmin from "../../components/AdminComponents/SidebarAdmin";

import AdminUser from "../../pages/admin/AdminUser";
import AdminProduct from "../../pages/admin/AdminProduct";
import AdminTable from "../../pages/admin/AdminTable";

const AdminApp = () => {
    return (
        <div className="absolute h-screen w-[100%] -z-10 bg-white">
            <div className="w-[100%] h-max bg-white z-[1]">
                <NavbarAdmin />
                <SidebarAdmin>
                    <Routes>
                        <Route path="/" element={<AdminHome />} />
                        <Route path="/users" element={<AdminUser />} />
                        <Route path="/products" element={<AdminProduct />} />
                        <Route path="/tables" element={<AdminTable />} />
                    </Routes>
                </SidebarAdmin>
            </div>
        </div>
    );
};

export default AdminApp;
