import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Nopage from './pages/Nopage'
import ProtectedRoute from './pages/ProtectedRoute'

import AdminHome from './pages/admin/AdminHome'
import CustomerHome from './pages/admin/AdminHome'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Nopage />} />

        {/* Rute jika role admin */}
        <Route path='/admin' element={
          <ProtectedRoute>
            <AdminHome />
          </ProtectedRoute>
        } />

        {/* Rute jika role customer */}
        <Route path='/customer' element={
          <ProtectedRoute>
            <CustomerHome />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App