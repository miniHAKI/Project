import React, { useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
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
import Home from "./home";

const App = () => {
  const [IsLogin, setIsLogin] = useState(true);

  return (
    <div className="w-full h-full text-black bg--700">
      <BrowserRouter>
        <Routes>
          <Route
            path="/*"
            element={<ConditionalNavbar />}
          />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
};

const ConditionalNavbar = () => {
  const location = useLocation(); // Now inside BrowserRouter
  return (
    <>
      {/* Only render Navbar if not on the Signup page */}
      {location.pathname !== '/signup' && location.pathname !== '/login' &&  <Navbar />}
      
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/billing" element={<BillingDetails />} />
        <Route path="/product/details" element={<ProductDetailPage />} />
      </Routes>
         {/* Only render Navbar if not on the Signup page */}
         {location.pathname !== '/signup'  && location.pathname !== '/login' &&<Footer />}
    </>
  );
};

export default App;
