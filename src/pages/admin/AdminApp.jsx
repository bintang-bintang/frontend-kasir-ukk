import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHome from "./AdminHome";
import NavbarAdmin from "../../components/NavbarAdmin";
import SidebarAdmin from "../../components/SidebarAdmin";

const AdminApp = () => {
  return (
    <>
      <NavbarAdmin />
      <SidebarAdmin>
        
      </SidebarAdmin>
    </>
  );
};

export default AdminApp;
