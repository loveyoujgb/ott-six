import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { __getMovies } from "../redux/modules/moviesSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(__getMovies());
  }, [dispatch]);
  return <>Home</>;
};

export default Home;
