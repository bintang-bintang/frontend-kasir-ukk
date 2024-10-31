import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nopage from "./pages/Nopage";
import ProtectedRoute from "./pages/ProtectedRoute";

import Authentication from "./pages/Authentication";
import CobaOrder from "./pages/kasir/CobaOrder";

import AdminApp from "./pages/admin/AdminApp";
import KasirApp from "./pages/kasir/KasirApp";
import ManagerApp from "./pages/manager/ManagerApp";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/coba" element={<CobaOrder />} />
                <Route path="/login" element={<Authentication />} />

                {/* Rute jika role admin */}
                <Route
                    path="/admin/*"
                    element={
                        <ProtectedRoute allowedRoles={['admin']}>
                            <AdminApp />
                        </ProtectedRoute>
                    }
                />

                {/* Rute jika role kasir */}
                <Route
                    path="/kasir/*"
                    element={
                        <ProtectedRoute allowedRoles={['kasir']}>
                            <KasirApp />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/manager/*"
                    element={
                        <ProtectedRoute allowedRoles={['manager']}>
                            <ManagerApp />
                        </ProtectedRoute>
                    }
                />

                <Route path="*" element={<Nopage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;