import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarManager from "../../components/ManagerComponent/NavbarManager";
import SidebarManager from "../../components/ManagerComponent/SidebarManager";

import ManagerHome from "./ManagerHome";
import ManagerHistory from "./ManagerHistory";

const ManagerApp = () => {
    return (
        <div className="absolute h-screen w-[100%] -z-10 bg-white">
            <div className="w-[100%] h-max bg-white z-[1] ">
                <NavbarManager />
                <SidebarManager>
                    <Routes>
                        <Route path="/" element={<ManagerHome />} />
                        <Route path="/history" element={<ManagerHistory />} />
                    </Routes>
                </SidebarManager>
            </div>
        </div>
    );
};

export default ManagerApp;
