import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ReviewForm from "../pages/ReviwForm";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reviewform" element={<ReviewForm />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
