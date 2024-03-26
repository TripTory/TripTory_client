import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CreateTripPage from "../pages/CreateTripPage";
import React from "react";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/createTrip" element={<CreateTripPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
