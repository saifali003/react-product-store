import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import CartPage from "./Pages/CartPage"

export default function App(){
  return(
    <div className="flex flex-col min-h-screen bg-gray-100">
      
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex grow max-w-7xl mx-auto p-4 pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage/>} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}