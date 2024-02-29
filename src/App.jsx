import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./stores/pages/LandingPage";
import Navbar from "./stores/components/Navbar";
import UserCard from "./stores/UserCard";
import Product from "./stores/components/Product";
import ShopingPage from "./stores/pages/ShopingPage";

const App = () => {
  return (
    <div>
      <Navbar />

      <hr style={{ height: "10px", color: "red" }}></hr>
      <div style={{ margin: "5px 10px" }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/:catogery" element={<ShopingPage />} />

          <Route path="/:catogery/:id" element={<Product />} />

          <Route path="/cart" element={<UserCard />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
