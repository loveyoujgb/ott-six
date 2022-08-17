import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Review = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <ListForm
      onClick={() => {
        navigate(`/detail/${movie.boardId}`);
      }}
      // 상세페이지로 갈 수 있도록 수정할 예정
    >
      <ReviewTitle>{movie.title}</ReviewTitle>
      <ReviewTime>{movie.createTime}</ReviewTime>
      <ReviewUserName>{movie.nickname}</ReviewUserName>
    </ListForm>
  );
};

export default Review;

const ListForm = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  border-bottom: 1px solid rgb(138, 138, 138);
  font-size: 18px;
`;

const ReviewTitle = styled.div`
  width: 60%;
  /* background-color: rgb(138,138,138); */
  /* border: 1px solid rgb(138,138,138); */
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 10px;
  margin: 10px;
`;

const ReviewTime = styled.div`
  width: 15%;
  /* background-color: rgb(138,138,138); */
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const ReviewUserName = styled.div`
  width: 15%;
  /* background-color: rgb(138,138,138); */
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
