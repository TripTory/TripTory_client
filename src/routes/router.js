import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import JoinPage from "../pages/JoinPage";
import CreateTripPage from "../pages/CreateTripPage";
import DiaryWritePage from "../pages/DiaryWritePage";
import React from "react";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/createTrip" element={<CreateTripPage/>} />
        <Route path="/diary" element={<DiaryWritePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
