import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import JoinPage from "../pages/JoinPage";
import AddTripPage from "../pages/AddTripPage";
import React from "react";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/addtrip" element={<AddTripPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
