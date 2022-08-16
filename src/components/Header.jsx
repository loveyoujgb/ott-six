import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./elements/Button";
import setAuthorizationToken from "../utils/setAuthorizationToken";
import { __loginCheck } from "../redux/modules/loginSlice";
import { setRefreshTokenToCookie, getAccessToken } from "../actions/Cookie";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  // const userInfo = useSelector((state) => state.login.login);
  const { error, isLoading, login, name } = useSelector((state) => state.login);
  console.log(login);
  console.log(name);

  useEffect(() => {
    if (getAccessToken()) {
      dispatch(__loginCheck());
    } else {
      return;
    }
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const onClickBoardHandler = () => {
    navigate("/reviewboard");
  };

  const onClickLoginHandler = () => {
    navigate("/login");
  };
  const onClickSignUpHandler = () => {
    navigate("/signup");
  };

  return (
    <HeaderWrap>
      <LogoButton
        onClick={() => {
          navigate("/");
        }}
      >
        OTTSIX
      </LogoButton>
      <ButtonWrap>
        <Button btntype="basic" onClick={onClickBoardHandler}>
          게시판
        </Button>
        <Button btntype="basic" onClick={onClickLoginHandler}>
          로그인{name}
        </Button>
        <Button btntype="basic" onClick={onClickSignUpHandler}>
          회원가입
        </Button>
      </ButtonWrap>
    </HeaderWrap>
  );
};
export default Header;

const HeaderWrap = styled.header`
  background-color: #212121;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 12px 0px 12px;
`;

const LogoButton = styled.button`
  background-color: #212121;
  border: none;
  width: 120px;
  font-size: 40px;
  /* color: #4729be; */
  color: red;
  font-weight: bold;
`;
const ButtonWrap = styled.div`
  font-size: 24px;
`;
