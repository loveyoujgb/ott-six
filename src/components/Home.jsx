import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { __getMovies } from "../redux/modules/moviesSlice";
import hansan from "../assets/hansan.jpg";
import { getTokenCookie } from "../actions/Cookie";

const Home = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(__getMovies());
  }, [dispatch]);

  return (
    <HomeContainer>
      <HomeImg />
      <HomeFirstWrap>
        <HomeTitle>쉽게 영화 후기를 남길 수 있는 홈페이지</HomeTitle>
        <HomeAbout>내가 본 영화의 후기를 남기는 것을 물론, 다른 사람들의 후기도 쉽게 살펴볼 수 있는 OTTSIX! 지금 후기를 작성해보세요.</HomeAbout>
        <StButtons>
          <ReviewButton
            type="button"
            onClick={() => {
              if (getTokenCookie()) {
                navigate("/reviewform");
              } else {
                alert("리뷰를 작성하시려면 로그인을 해주세요.");
                navigate("/login");
                return;
              }
            }}
          >
            영화 리뷰 작성하기
          </ReviewButton>
          <ReviewListButton
            onClick={() => {
              navigate("reviewboard");
            }}
          >
            영화 리뷰 둘러보기
          </ReviewListButton>
        </StButtons>
      </HomeFirstWrap>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  width: 100%;
  height: 70%;
  position: relative;
`;
const HomeImg = styled.div`
  /* position: relative; */
  background-image: url(${hansan});
  background-position: center;
  background-size: 100% 100%;
  height: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  opacity: 0.3;
`;

const HomeFirstWrap = styled.div`
  position: absolute;
  top: 20%;
  left: 20%;
  width: 600px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 4px solid white;
  padding: 20px;
  border-radius: 10px;
`;

const HomeTitle = styled.h1`
  /* width: 504px; */
  height: 150px;
  font-size: 50px;
  /* font-weight: bold; */
  font-family: "나눔고딕", NanumGothic, "돋움", Dotum, Helvetica, sans-serif;
  color: rgb(251, 188, 4);
`;

const HomeAbout = styled.div`
  font-size: 25px;
  /* font-weight: bold; */
  font-family: "나눔고딕", NanumGothic, "돋움", Dotum, Helvetica, sans-serif;
  color: white;
`;

const ReviewButton = styled.button`
  background-color: #35247b;
  border: transparent;
  color: white;
  border-radius: 10px;
  width: 250px;
  height: 50px;
  margin-right: 10px;
  font-size: 15px;
  font-weight: bold;
  :hover {
    border: 5px solid #363636;
  }
`;
const ReviewListButton = styled.button`
  background-color: #363636;
  border: transparent;
  color: white;
  border-radius: 10px;
  width: 250px;
  height: 50px;
  margin-right: 10px;
  font-size: 15px;
  font-weight: bold;
  :hover {
    border: 5px solid #35247b;
  }
`;

const StButtons = styled.div`
  margin-top: 50px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`;
