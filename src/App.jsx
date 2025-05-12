import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import BlogPage from "./pages/BlogPage";
import CheckoutPage from "./pages/CheckoutPage";
import ProductDtailsPage from "./pages/ProductDtailsPage";
import ContractPage from "./pages/ContractPage";
import CommonLayout from "./components/CommonLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CommonLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/product-list" element={<ProductListPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/productdtails" element={<ProductDtailsPage />} />
        <Route path="/contract" element={<ContractPage />} />
      </Route>
    </Routes>
  );
}

export default App;
