import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import { useDispatch } from "react-redux";
import ProductDetails from './pages/ProductDetails'
import Header from "./components/Header";
import Cart from './pages/Cart'
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getProductData();
  });
  const getProductData = async () => {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      dispatch({
        type: "SET_PRODUCT",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products/:id" element={<ProductDetails/>}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </div>
  );
};

export default App;
