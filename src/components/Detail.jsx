import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { __deleteMovies, __getMovies } from "../redux/modules/moviesSlice";
// import Button from "./elements/Button";
import Comment from "./Comment";
import { logout, cookieCkeck } from "../actions/Cookie";
import { __loginCheck } from "../redux/modules/loginSlice";

const Detail = () => {
  const param = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [token, setToken] = useState(false);

  const { movies } = useSelector((state) => state.movies);
  const { nickname } = useSelector((state) => state.login);
  const movie = movies.find((movie) => movie.boardId === parseInt(param.id));

  useEffect(() => {
    dispatch(__getMovies());
    if (cookieCkeck()) {
      dispatch(__loginCheck());
    } else if (nickname === movie.nickname) {
      setToken(true);
    }
  }, [dispatch]);

  const onClickDeleteHandler = (e) => {
    // e.stopPropagation();
    if (window.confirm("정말 삭제하시겠습니까?")) dispatch(__deleteMovies(movie.boardId));
    navigate(`/reviewboard`);
  };

  return (
    <FormContainer
    // onClick={() => {
    //     navigate(`/reviewboard`)
    // }}
    >
      <FormSecondWrap>
        <FormTitleWrap>
          <StLables>
            <StLabel>글 제목</StLabel>
            <StSecondLable
              onClick={() => {
                navigate("/reviewboard");
              }}
            >
              [이전으로]
            </StSecondLable>
          </StLables>
          <StTitle>{movie.title}</StTitle>
          {/* <div>{movie.title}</div> */}
          {/* <StFirstInput /> */}
        </FormTitleWrap>
        <FormContentWrap>
          <StLabel>글 내용</StLabel>
          <StContent>{movie.content}</StContent>
          {/* <div>{movie.content}</div> */}
          {/* <StSecondInput /> */}
        </FormContentWrap>
        <Buttons>
          {token ? (
            <>
              <StButton
                onClick={() => {
                  navigate(`/detail/${param.id}/change`);
                }}
              >
                수정하기
              </StButton>
              <StButton
                onClick={() => {
                  onClickDeleteHandler();
                }}
              >
                삭제하기
              </StButton>
            </>
          ) : null}
        </Buttons>
      </FormSecondWrap>
      {/* <CommentButton
                onClick={() => {
                    navigate("/comment")
                }}
            >
                댓글 작성하기
            </CommentButton> */}

      <Comment />
    </FormContainer>
  );
};

export default Detail;

const FormContainer = styled.div`
  /* border: 1px solid white; */
  width: 1400px;
  height: 80%;
  display: flex;
  margin: auto;
  flex-direction: column;
  padding: 20px;
`;

const StLables = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 10px;
`;
const StSecondLable = styled.div`
  font-weight: bold;
  color: rgb(251, 188, 4);
  /* text-decoration: underline; */
  :hover {
    color: white;
  }
`;

const FormSecondWrap = styled.div`
  background-color: rgb(45, 45, 45);
  border-radius: 5px;
  height: 70%;
  margin-top: 20px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
`;
const FormTitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 95%;
`;

const StTitle = styled.div`
  margin-top: 10px;
  height: 50px;
  background-color: #cec8c8;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding-left: 20px;
`;

const FormContentWrap = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  width: 95%;
`;
const StLabel = styled.label`
  color: white;
  margin-bottom: 5px;
  font-weight: bold;
`;
const StContent = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  height: 300px;
  background-color: #cec8c8;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding-left: 20px;
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  gap: 20px;
  width: 95%;
`;

const StButton = styled.button`
  background-color: rgb(53, 36, 123);
  color: white;
  border: none;
  width: 10%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 5px;
  font-weight: bold;
  :hover {
    border: 1px solid rgb(251, 188, 4);
  }
`;

// const CommentButton = styled.button`
//     background-color: rgb(251,188,4);
//     border: none;
//     border-radius: 5px;
//     color: white;
//     width: 100%;
//     height: 50px;
//     margin-top: 15px;
// `
