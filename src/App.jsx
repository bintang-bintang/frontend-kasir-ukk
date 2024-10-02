import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from './pages/Login'
import Nopage from "./pages/Nopage";
import ProtectedRoute from "./pages/ProtectedRoute";

import AdminHome from "./pages/admin/AdminHome";
import CustomerHome from "./pages/admin/AdminHome";
import Authentication from "./pages/Authentication";
import Loginform from "./components/Loginform";
import Registerform from "./components/Registerform";
import AdminApp from "./pages/admin/AdminApp";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <Authentication>
              <Loginform />
            </Authentication>
          }
        />
        <Route
          path="/register"
          element={
            <Authentication>
              <Registerform />
            </Authentication>
          }
        />
        <Route path="*" element={<Nopage />} />

        {/* Rute jika role admin */}
        <Route
          path="/admin/*"
          element={
              <AdminApp />
          }
        />

        {/* Rute jika role customer */}
        <Route
          path="/customer"
          element={
            <ProtectedRoute>
              <CustomerHome />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
