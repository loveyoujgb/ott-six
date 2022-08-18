import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { __getMovies } from "../redux/modules/moviesSlice";
import hansan from "../assets/hansan.jpg";
import { cookieCkeck } from "../actions/Cookie";
import Button from "./elements/Button";

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
        <HomeTitle>쉽게 영화 후기를 남길 수 있는 OTTSIX</HomeTitle>
        <HomeAbout>내가 본 영화의 후기를 남기는 것을 물론, 다른 사람들의 후기도 쉽게 살펴볼 수 있는 OTTSIX! 지금 후기를 작성해보세요.</HomeAbout>
        <StButtons>
          <Button
            btntype="blue"
            width="250px"
            height="50px"
            font="15"
            margin="0 10px"
            border="3px solid #363636;"
            onClick={() => {
              if (cookieCkeck()) {
                navigate("/reviewform");
              } else {
                alert("리뷰를 작성하시려면 로그인을 해주세요.");
                navigate("/login");
                return;
              }
            }}
          >
            영화 리뷰 작성하기
          </Button>
          <Button
            btntype="basic"
            width="250px"
            height="50px"
            font="15"
            margin="0 10px"
            border="3px solid #35247b"
            onClick={() => {
              navigate("reviewboard");
            }}
          >
            영화 리뷰 둘러보기
          </Button>
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
  top: 15%;
  left: 20%;
  width: 550px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 4px solid white;
  padding: 20px;
  border-radius: 10px;
`;

const HomeTitle = styled.h1`
  height: 120px;
  font-size: 40px;
  font-family: "나눔고딕", NanumGothic, "돋움", Dotum, Helvetica, sans-serif;
  color: rgb(251, 188, 4);
`;

const HomeAbout = styled.div`
  font-size: 25px;
  font-family: "나눔고딕", NanumGothic, "돋움", Dotum, Helvetica, sans-serif;
  color: white;
`;

const StButtons = styled.div`
  margin-top: 50px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`;
