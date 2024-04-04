import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import JoinPage from "../pages/JoinPage";
import CreateTripPage from "../pages/CreateTripPage";
import MypagePage from "../pages/MypagePage";
import EditProfilPage from "../pages/EditProfilPage";
import React from "react";
import TripTablePage from "../pages/TripTablePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/createTrip" element={<CreateTripPage />} />
        <Route path="/mypage" element={<MypagePage />} />
        <Route path="/editprofil" element={<EditProfilPage />} />
        <Route path="/triptable" element={<TripTablePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
