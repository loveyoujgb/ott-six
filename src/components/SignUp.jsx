import styled from "styled-components";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { __getUserInfo, __postUserInfo } from "../redux/modules/userInfoSlice";
import useInputs from "../hooks/useInputs";
import Button from "./elements/Button";
import Input from "./elements/Input";

const SignUp = () => {
  const dispatch = useDispatch();
  const [userInfo, onChange, reset] = useInputs({
    username: "",
    nickname: "",
    password: "",
    validpassword: "",
  });

  const { username, nickname, password, validpassword } = userInfo;

  useEffect(() => {
    dispatch(__getUserInfo());
  }, [dispatch]);

  // const [userInfo, setUserInfo] = useState({});

  const onCreate = (e) => {
    e.preventDefault();
    console.log(userInfo);
    dispatch(__postUserInfo(userInfo));
    reset();
  };
  // const onCreate = useCallback(
  //   (e) => {
  //     e.preventDefault();
  //     setUserInfo({
  //       username: username,
  //       nickname: nickname,
  //       password: password,
  //       validpassword: validpassword,
  //     });
  //     dispatch(__postUserInfo(userInfo));
  //     reset();
  //   },
  //   [username, nickname, password, validpassword, reset]
  // );

  return (
    <Whole>
      <LoginContainer onSubmit={onCreate}>
        <Title>회원가입</Title>
        <Footer>
          <Input name="username" onChange={onChange} value={username} placeholder="아이디" type="text" inputType="basic"></Input>
          <Input name="nickname" onChange={onChange} value={nickname} placeholder="닉네임" type="text" inputType="basic"></Input>
          <Input name="password" onChange={onChange} value={password} placeholder="비밀번호" type="password" inputType="basic"></Input>
          <Input name="validpassword" onChange={onChange} value={validpassword} placeholder="비밀번호 확인" type="password" inputType="basic"></Input>
          <Button type="submit" btntype="blue">
            로그인
          </Button>
        </Footer>
      </LoginContainer>
    </Whole>
  );
};
export default SignUp;

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

// const Btn = styled.button`
//   width: 300px;
//   height: 50px;
//   margin-top: 10px;
//   margin-bottom: ${(props) => props.marginBottom};
//   border-radius: 5px;
//   color: ${(props) => props.textColor};
//   background-color: ${(props) => props.backColor};
//   font-size: large;
//   padding: ${(props) => props.padding};
//   :focus {
//     cursor: pointer;
//   }
// `;

const Footer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-between;
  height: 350px;
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
