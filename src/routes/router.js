import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import AgreePage from "../pages/AgreePage";
import AddTripPage from "../pages/AddTripPage";
import DiaryWritePage from "../pages/DiaryWritePage";
import MypagePage from "../pages/MypagePage";
import EditProfilPage from "../pages/EditProfilPage";
import JoinTripPage from "../pages/JoinTripPage";
import InviteFriendPage from "../pages/InviteFriendPage";
import TagPage from "../pages/TagPage";
import EditDiaryWritePage from "../pages/EditDiaryWritePage";

import React from "react";
import DiaryListPage from "../pages/DiaryListPage";
import MapPage from "../pages/MapPage";
import DiaryPage from "../pages/DiaryPage";
import CalendarPage from "../pages/CalendarPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/agree" element={<AgreePage />} />
        <Route path="/addtrip" element={<AddTripPage/>} />
        <Route path="/diary" element={<DiaryWritePage />} />
        <Route path="/editdiary" element={<EditDiaryWritePage />} />
        <Route path="/mypage" element={<MypagePage />} />
        <Route path="/editprofil" element={<EditProfilPage />} />
        <Route path="/jointrip" element={<JoinTripPage />} />
        <Route path="/invitefriend" element={<InviteFriendPage />} />
        <Route path="/triptable" element={<DiaryListPage />} />
        <Route path="/tripmap" element={<MapPage />} />
        <Route path="/showdiary" element={<DiaryPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/tag/:tagName" element={<TagPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
