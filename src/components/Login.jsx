import React from "react";
import styled from "styled-components";
import Button from "./elements/Button";
import Input from "./elements/Input";
import {useNavigate} from "react-router-dom"

const Login = () => {

  const navigate = useNavigate()

  const onClickLoginHandler = () => {
    navigate("/")
  }

  return (
    <Whole>
      <LoginContainer>
        <Title>로그인</Title>
        <Footer>
          <Input placeholder="아이디" type="basic"></Input>
          <Input placeholder="비밀번호" type="basic"></Input>
          <Button 
          btntype="blue"
          onClick={onClickLoginHandler}
          >로그인</Button>
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
