import React from "react";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Button from "./elements/Button";
import Input from "./elements/Input";
import useInput from "../hooks/useInput";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getLogin, __loginCheck, __postLogin } from "../redux/modules/loginSlice";
import { getAccessToken } from "../actions/Cookie";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userName, onChangeUsername, userNameReset] = useInput("");
  const [password, onChangePassword, userPassword] = useInput("");
  const { error, isLoading, login, name } = useSelector((state) => state.login);
  console.log(login);
  console.log(name);

  if (error) {
    alert(error);
  }

  console.log(error);
  const onCreate = (e) => {
    e.preventDefault();
    dispatch(
      __postLogin({
        username: userName,
        password: password,
      })
    );
    userNameReset();
    userPassword();
    navigate("/");
    console.log(error);
    // if (typeof error === null) {
    //   console.log(error);
    //   alert("사용자입니당");
    //   navigate("/");
    // } else {
    //   alert("사용자가 아닙니다");
    //   console.log(error);
    // }

    // dispatch(__loginCheck());
  };

  // useEffect(() => {
  //   // dispatch(__getLogin());
  // }, [dispatch, error]);

  const onClickLoginHandler = () => {
    // dispatch(__postLogin());
  };

  return (
    <Whole>
      <LoginContainer onSubmit={onCreate}>
        <Title>로그인</Title>
        <Footer>
          <Input name="userName" value={userName} onChange={onChangeUsername} type="text" placeholder="아이디" inputType="basic"></Input>
          <Input name="password" value={password} onChange={onChangePassword} type="password" placeholder="비밀번호" inputType="basic"></Input>
          <Button type="submit" btntype="blue" onClick={onClickLoginHandler}>
            로그인
          </Button>
        </Footer>
      </LoginContainer>
    </Whole>
  );
};

export default Login;

const Whole = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: black;
`;

const LoginContainer = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
  padding: 70px;
  background-color: #181818;
`;

const Title = styled.div`
  height: 50px;
  margin-bottom: 20px;
  font-size: xx-large;
  font-weight: 700;
  color: white;
`;

const Btn = styled.button`
  width: 300px;
  height: 50px;
  margin-top: 10px;
  margin-bottom: ${(props) => props.marginBottom};
  border-radius: 5px;
  color: ${(props) => props.textColor};
  background-color: ${(props) => props.backColor};
  font-size: large;
  padding: ${(props) => props.padding};
  :focus {
    cursor: pointer;
  }
`;

const Footer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  color: #939393;
  font-weight: 500;
  font-size: large;
`;

const White = styled.span`
  color: white;
  text-decoration: none;
  font-weight: 800;

  &:hover {
    cursor: pointer;
  }
`;
