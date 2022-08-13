import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ReviewForm from "../pages/ReviwForm";
import ReviewBoard from "../pages/ReviewBoard.jsx"
import TestPage from "../pages/TestPage";
import ReviewDetail from "../pages/ReviewDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reviewform" element={<ReviewForm />} />
        <Route path="/reviewboard" element={<ReviewBoard />} />
        <Route path="/reviewdetail" element={<ReviewDetail />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
