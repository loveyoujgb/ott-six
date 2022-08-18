import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { __getMovies } from "../redux/modules/moviesSlice";
import Review from "./Review";
import { __loginCheck } from "../redux/modules/loginSlice";
import { cookieCkeck } from "../actions/Cookie";

const ReviewList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { movies, isLoading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(__getMovies());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩중 ...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <StList>
      <FormContainer>
        <FormFirstWrap>게시판</FormFirstWrap>
        <FormConnent
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (cookieCkeck()) {
              dispatch(__loginCheck());
              navigate("/reviewform");
            } else {
              alert("게시글을 작성하시려면 로그인을 해주세요.");
              return;
            }
          }}
        >
          [게시글 쓰기]
        </FormConnent>
        <FormSecondWrap>
          <TitleWrap>
            <ReviewTitle>글 제목</ReviewTitle>
            <ReviewTime>작성 시간</ReviewTime>
            <ReviewUserName>작성자명</ReviewUserName>
          </TitleWrap>
          <ListForm>
            {movies?.map((movie, index) => (
              <Review
                // key={movie.boardId}
                key={index}
                movie={movie}
              />
            ))}
          </ListForm>
        </FormSecondWrap>
      </FormContainer>
    </StList>
  );
};

export default ReviewList;

const StList = styled.div`
  background-color: #181818;
`;

const FormContainer = styled.div`
  width: 1400px;
  display: flex;
  margin: auto;
  flex-direction: column;
  padding: 20px;
`;

const FormConnent = styled.div`
  margin: 10px 0;
  text-align: right;
  padding-right: 10px;
  color: white;
  :hover {
    color: rgb(251, 188, 4);
  }
`;

const FormFirstWrap = styled.div`
  background-color: rgb(53, 36, 123);
  color: white;
  border: none;
  border-radius: 5px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FormSecondWrap = styled.div`
  background-color: rgb(45, 45, 45);
  border-radius: 5px;
  height: 90%;
  /* margin-top: 20px; */
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const TitleWrap = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  border-bottom: 3px solid white;
  font-weight: bold;
`;
const ListForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

const ReviewTitle = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 10px;
  margin: 10px;
`;

const ReviewTime = styled.div`
  width: 15%;
  padding: 10px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const ReviewUserName = styled.div`
  width: 15%;
  padding: 10px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
