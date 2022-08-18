import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { __getMovies, __postMovies } from "../redux/modules/moviesSlice";
import Button from "./elements/Button";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    dispatch(__getMovies());
  }, [dispatch]);

  const { title, content } = movie;

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setMovie({
      ...movie,
      [name]: value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title === "") {
      return alert("제목을 입력해주세요");
    } else if (content === "") {
      return alert("내용을 입력해주세요");
    }
    dispatch(__postMovies(movie));
    dispatch(__getMovies());
    navigate("/reviewboard");
  };

  return (
    <FormContainer onSubmit={onSubmitHandler}>
      <FormFirstWrap>
        <div>리뷰 작성하기</div>
      </FormFirstWrap>
      <FormSecondWrap>
        <FormTitleWrap>
          <StLabel>글 제목</StLabel>
          <StFirstInput maxLength="30" type="text" name="title" value={title} onChange={onChangeHandler} placeholder="제목을 입력해주세요.(30자 이내)" />
        </FormTitleWrap>
        <FormContentWrap>
          <StLabel>글 내용</StLabel>
          <StSecondInput maxLength="200" type="text" name="content" value={content} onChange={onChangeHandler} placeholder="내용을 입력해주세요.(200자 이내)" />
        </FormContentWrap>
        <StButtons>
          <Button btntype="basic" type="submit" margin="0 10px 0 0" width="200px" height="40px" border="1px solid rgb(251,188,4)">
            작성하기
          </Button>
          <Button
            btntype="basic"
            width="200px"
            height="40px"
            border="1px solid rgb(251,188,4)"
            onClick={() => {
              navigate("/");
            }}
          >
            취소하기
          </Button>
        </StButtons>
      </FormSecondWrap>
    </FormContainer>
  );
};

export default Form;

const FormContainer = styled.form`
  width: 1400px;
  height: 90vh;
  display: flex;
  margin: auto;
  flex-direction: column;
`;

const FormFirstWrap = styled.div`
  background-color: rgb(251, 188, 4);
  color: white;
  border: none;
  border-radius: 5px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
`;
const FormSecondWrap = styled.div`
  background-color: rgb(45, 45, 45);
  height: 80vh;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
`;
const FormTitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
`;

const StFirstInput = styled.input`
  box-sizing: border-box;
  background-color: #363636;
  color: white;
  border: none;
  border-radius: 5px;
  width: 1300px;
  height: 50px;
  padding-left: 20px;
  :hover {
    border: 1px solid rgb(251, 188, 4);
  }
`;

const FormContentWrap = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  width: 95%;
`;
const StLabel = styled.label`
  color: white;
  margin-bottom: 20px;
  font-weight: bold;
  padding-left: 5px;
`;
const StSecondInput = styled.input`
  box-sizing: border-box;
  background-color: #363636;
  color: white;
  border: none;
  border-radius: 5px;
  width: 1300px;
  height: 450px;
  padding-left: 20px;
  :hover {
    border: 1px solid rgb(251, 188, 4);
  }
`;
const StButtons = styled.div`
  display: flex;
`;
