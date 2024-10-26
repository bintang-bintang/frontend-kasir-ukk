import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from './pages/Login'
import Nopage from "./pages/Nopage";
import ProtectedRoute from "./pages/ProtectedRoute";

import Authentication from "./pages/Authentication";
import AdminApp from "./pages/admin/AdminApp";
import KasirApp from "./pages/kasir/KasirApp";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Authentication />} />

                {/* Rute jika role admin */}
                <Route path="/admin/*" element={<AdminApp />} />
                {/* Rute jika role kasir */}
                <Route path="/kasir/*" element={<KasirApp />} />

                <Route path="*" element={<Nopage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
