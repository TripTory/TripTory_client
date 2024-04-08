import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import JoinPage from "../pages/JoinPage";
import AddTripPage from "../pages/AddTripPage";
import DiaryWritePage from "../pages/DiaryWritePage";
import MypagePage from "../pages/MypagePage";
import EditProfilPage from "../pages/EditProfilPage";

import React from "react";
import DiaryListPage from "../pages/DiaryListPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/addtrip" element={<AddTripPage/>} />
        <Route path="/diary" element={<DiaryWritePage />} />
        <Route path="/mypage" element={<MypagePage />} />
        <Route path="/editprofil" element={<EditProfilPage />} />
        <Route path="/triptable" element={<DiaryListPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
