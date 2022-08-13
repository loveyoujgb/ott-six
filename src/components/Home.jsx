import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { __getMovies } from "../redux/modules/moviesSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(__getMovies());
  }, [dispatch]);
  return (
    <>
      <HomeWrap>
        <HomeUpWrap>
          <HomeImg>이미지</HomeImg>
          <HomeImg>이미지</HomeImg>
        </HomeUpWrap>
        <HomeBottomWrap>
          <BottomLeftImg>로고이미지</BottomLeftImg>
          <BottomRightImg>OTTSIX에서 TOP RANK에 있는 영화와 드라마에 리뷰를 남기면서 소통하세요</BottomRightImg>
        </HomeBottomWrap>
      </HomeWrap>
    </>
  );
};

export default Home;

const HomeWrap = styled.div`
  margin: 0 auto;
  max-width: 100%;
  height: 92%;
  padding: 10px 0;
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

const HomeUpWrap = styled.div`
  box-sizing: border-box;
  padding: 30px 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: stretch;
  flex-direction: row;
  gap: 40px;
`;

const HomeImg = styled.div`
  background-image: url("https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/6GlL/image/RABTPwU4lfTwFZPRD4aeox7Jpz0.jpg");
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 320px;
  margin: 10px;
  border: 1px solid black;
`;

const HomeBottomWrap = styled.div`
  box-sizing: border-box;
  padding: 10px 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: 40px;
`;

const BottomLeftImg = styled.div`
  background-image: url("https://cdn.catholicnews.co.kr/news/photo/202001/22135_43951_5525.jpg");
  background-position: center;
  background-size: cover;
  width: 500px;
  height: 200px;
  margin: 10px;
  border: 1px solid black;
`;

const BottomRightImg = styled.div`
  font-size: 55px;
  padding: 10px;
  color: #c0c0c0;
  background-color: black;
  /* background-image: url("https://cdn.catholicnews.co.kr/news/photo/202001/22135_43951_5525.jpg"); */
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 200px;
  margin: 10px;
  border: 1px solid black;
`;
