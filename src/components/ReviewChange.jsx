import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { __getMovies, __putMovies } from "../redux/modules/moviesSlice";
import Button from "./elements/Button";

const ReviewChange = () => {
  const param = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [updateTitle, setUpdateTitle] = useState(movie.title);
  const [updateContent, setUpdateContent] = useState(movie.content);

  const { isLoading, error, movies } = useSelector((state) => state.movies);
  const movie = movies.find((movie) => movie.boardId === parseInt(param.id));

  useEffect(() => {
    dispatch(__getMovies());
  }, [dispatch]);

  const onChangeTitleHandler = (e) => {
    setUpdateTitle(e.target.value);
  };

  const onChangeContentHandler = (e) => {
    setUpdateContent(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      __putMovies({
        ...movie,
        boardId: param.id,
        title: updateTitle,
        content: updateContent,
      })
    );
    dispatch(__getMovies());
    navigate(`/detail/${param.id}`);
  };

  if (isLoading) {
    return <div>로딩중 ...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <FormContainer onSubmit={onSubmitHandler}>
      <FormSecondWrap>
        <FormTitleWrap>
          <StLabel>글 제목</StLabel>
          <StFirstInput name="updateTitle" value={updateTitle} onChange={onChangeTitleHandler} />
        </FormTitleWrap>
        <FormContentWrap>
          <StLabel>글 내용</StLabel>
          <StSecondInput name="updateContent" value={updateContent} onChange={onChangeContentHandler} />
        </FormContentWrap>
        <Buttons>
          <Button btntype="yellow" width="150px" height="40px" border="1px solid #35247b;">
            저장하기
          </Button>
          <Button
            btntype="yellow"
            width="150px"
            height="40px"
            border="1px solid #35247b;"
            onClick={() => {
              navigate(`/detail/${param.id}`);
            }}
          >
            취소하기
          </Button>
        </Buttons>
      </FormSecondWrap>
    </FormContainer>
  );
};

export default ReviewChange;

const FormContainer = styled.form`
  width: 1400px;
  height: 80%;
  display: flex;
  margin: auto;
  flex-direction: column;
  padding: 20px;
`;

const FormSecondWrap = styled.div`
  background-color: rgb(45, 45, 45);
  border-radius: 5px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const FormTitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 95%;
`;

const StFirstInput = styled.input`
  margin-top: 10px;
  height: 50px;
  border-radius: 5px;
  padding-left: 20px;
  background-color: #cec8c8; ;
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
`;
const StSecondInput = styled.input`
  margin-top: 10px;
  margin-bottom: 20px;
  height: 300px;
  border-radius: 5px;
  padding-left: 20px;
  background-color: #cec8c8;
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  gap: 20px;
  width: 95%;
  margin: 10px 0 25px 0;
`;
