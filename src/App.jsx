import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import Login from "./components/Login";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import Contact from "./components/Contact";
import BillingDetails from "./components/BillingDetails";
import Cart from "./components/Cart";
import ProductDetailPage from "./components/ProductDetailPage";

const App = () => {
  const [IsLogin, setIsLogin] = useState(true);
  return (
    <div className="w-full h-full text-black bg--700">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/billing" element={<BillingDetails />} />
          <Route path="/product/details" element={<ProductDetailPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
