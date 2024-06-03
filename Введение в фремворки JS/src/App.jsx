import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import MainPage from "./pages/MainPage";
import { Layout } from "./components/Layout";
import { PageCategories } from "./pages/PageCategories";
import { AllProducts } from "./pages/AllProducts";
import { AllSales } from "./pages/AllSales";
import {NotFound} from "./pages/NotFound"
import { ProductCat } from "./pages/ProductCat";
import { Products } from "./pages/Products";
import Product from "./components/Product/Product";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";


function App() {
  return (
    <div className="container">
      <Routes>
        <Route>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="Categories" element={<PageCategories/>}/>
            <Route path="AllProducts" element={<AllProducts/>}/>
            <Route path="AllSales" element={<AllSales/>}/>
            <Route path="ProductCat" element={<ProductCat/>}/>
            <Route path="Products" element={<Products/>}/>
            <Route path="Product" element={<Product/>}/>
            <Route path="ShoppingCart" element={<ShoppingCart/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
