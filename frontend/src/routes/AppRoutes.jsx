import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "../pages/Login"
import Dashboard from "../pages/Dashboard"
import Inventory from "../pages/Inventory"
import Products from "../pages/Products"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/inventory" element={<Inventory />} />

        <Route path="/products" element={<Products />} />

      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes