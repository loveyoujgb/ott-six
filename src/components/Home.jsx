import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { __getMovies } from "../redux/modules/moviesSlice";
import logo from "../assets/logo.jpg"

const Home = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(__getMovies());
  }, [dispatch]);
  return (

      <HomeWrap>
        <HomeUpWrap>
          <HomeImg
          onClick={() => {
            navigate("/reviewform")
          }}
          >영화 리뷰 작성</HomeImg>
          <HomeImg
          onClick={() => {
            navigate("/reviewboard")
          }}
          >리뷰 둘러보기</HomeImg>
        </HomeUpWrap>
        <HomeBottomWrap>
          <BottomLeftImg>로고이미지</BottomLeftImg>
          <BottomRightImg>OTTSIX에서 TOP RANK에 있는 영화와 드라마에 리뷰를 남기면서 소통하세요</BottomRightImg>
        </HomeBottomWrap>
      </HomeWrap>
  );
};

export default Home;

const HomeWrap = styled.div`
  /* margin: 0 auto;
  max-width: 100%;
  height: 92%;
  padding: 10px 0;
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column; */
  /* border: 1px solid white; */
  width: 1400px;
    height: 90vh;
  display: flex;
  margin: auto;
  flex-direction: column;
  padding: 20px;
  align-items: center;
`;


const HomeUpWrap = styled.div`
  /* border: 1px solid white; */
  box-sizing: border-box;
  padding: 30px;
  /* width: 100%; */
  width: 80%;
  display: flex;
  align-items: center;
  /* justify-content: stretch; */
  justify-content: center;
  flex-direction: row;
  gap: 50px;
`;

const HomeImg = styled.div`
  background-image: url("https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/6GlL/image/RABTPwU4lfTwFZPRD4aeox7Jpz0.jpg");
  background-position: center;
  background-size: cover;
  width: 450px;
  height: 320px;
  margin: 10px;
  border: 1px solid black;
`;

const HomeBottomWrap = styled.div`
  /* border: 1px solid white; */
  margin-top: 40px;
  box-sizing: border-box;
  padding: 10px 50px;
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: 40px;
`;

const BottomLeftImg = styled.div`
  /* background-image: url("https://cdn.catholicnews.co.kr/news/photo/202001/22135_43951_5525.jpg"); */
  background-image: url(${logo});
  background-position: center;
  background-size: cover;
  width: 40%;
  height: 100%;
  margin: 10px;
  border: 1px solid black;
`;

const BottomRightImg = styled.div`
  font-size: 40px;
  /* padding: 10px; */
  color: #c0c0c0;
  background-color: black;
  /* background-image: url("https://cdn.catholicnews.co.kr/news/photo/202001/22135_43951_5525.jpg"); */
  /* background-position: center;
  background-size: cover; */
  width: 100%;
  height: 100%;
  margin: 10px;
  padding: 0px 40px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
