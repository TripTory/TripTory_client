import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import JoinPage from "../pages/JoinPage";
import AddTripPage from "../pages/AddTripPage";
import DiaryWritePage from "../pages/DiaryWritePage";
import MypagePage from "../pages/MypagePage";
import EditProfilPage from "../pages/EditProfilPage";
import JoinTripPage from "../pages/JoinTripPage";
import InviteFriendPage from "../pages/InviteFriendPage";
import React from "react";
import DiaryListPage from "../pages/DiaryListPage";
import DiaryPage from "../pages/DiaryPage";

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
        <Route path="/jointrip" element={<JoinTripPage />} />
        <Route path="/invitefriend" element={<InviteFriendPage />} />
        <Route path="/triptable" element={<DiaryListPage />} />
        <Route path="/showdiary" element={<DiaryPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
