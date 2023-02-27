import React from "react";
import Navbar from "./pages/Navbar";
import { Routes, Route } from "react-router-dom"


import Home from "./pages/navbarpages/Home";
import Specialists from "./pages/navbarpages/Specialists";
import Cart from "./pages/navbarpages/Cart";
import Register from './pages/navbarpages/Register'
import Buynow from './pages/navbarpages/Buynow'
import Support from './pages/navbarpages/Support'


function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/specialists" element={<Specialists/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/buynow" element={<Buynow/>} />
          <Route path="/support" element={<Support/>} />
        </Routes>
    </div>
  );
}

export default App;
