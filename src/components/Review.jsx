import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Review = () => {
  const navigate = useNavigate();

  return (
    <ListForm
      onClick={() => {
        navigate("/");
      }}
    >
      <ReviewTitle>리뷰 제목 넣을 예정</ReviewTitle>
      <ReviewTime>작성 시간 넣을 예정</ReviewTime>
      <ReviewUserName>작성자명 넣을 예정</ReviewUserName>
    </ListForm>
  );
};

export default Review;

const ListForm = styled.form`
  width: 90%;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

const ReviewTitle = styled.div`
  width: 60%;
  background-color: rgb(138, 138, 138);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 10px;
  margin: 10px;
`;

const ReviewTime = styled.div`
  width: 15%;
  background-color: rgb(138, 138, 138);
  padding: 10px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const ReviewUserName = styled.div`
  width: 15%;
  background-color: rgb(138, 138, 138);
  padding: 10px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
