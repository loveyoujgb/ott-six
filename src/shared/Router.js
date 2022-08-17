import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ReviewForm from "../pages/ReviwForm";
import ReviewBoard from "../pages/ReviewBoard.jsx"
import ReviewDetail from "../pages/ReviewDetail";
import ReviewDetailChange from "../pages/ReviewDetailChange";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/reviewform" element={<ReviewForm />} />
        <Route path="/reviewboard" element={<ReviewBoard />} />
        <Route path="/detail/:id" element={<ReviewDetail />} />
        <Route path="/detail/:id/change" element={<ReviewDetailChange/>}/>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
