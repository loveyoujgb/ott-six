import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./elements/Button";
import setAuthorizationToken from "../utils/setAuthorizationToken";
import { __loginCheck } from "../redux/modules/loginSlice";
import { logout, getTokenCookie } from "../actions/Cookie";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [token, setToken] = useState(false);
  const { isLoading, error, name } = useSelector((state) => state.login);

  useEffect(() => {
    if (getTokenCookie()) {
      dispatch(__loginCheck());
      setToken(true);
    } else {
      return;
    }
  }, [getTokenCookie]);
  // useEffect(() => {
  //   dispatch(__loginCheck());
  // }, []);

  if (isLoading) {
    return <HeaderWrap>로딩 중....</HeaderWrap>;
  }
  if (error) {
    return <HeaderWrap>{error}</HeaderWrap>;
  }

  const onClickBoard = () => {
    navigate("/reviewboard");
  };

  const onClickLogin = () => {
    navigate("/login");
  };
  const onClickSignUp = () => {
    navigate("/signup");
  };
  const onClickLogout = () => {
    logout();
    navigate("/login");
    alert("로그아웃 되었습니다.");
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
      {token ? (
        <ButtonWrap>
          <Stspan>{name}님 환영합니다</Stspan>
          <Button btntype="basic" onClick={onClickBoard}>
            게시판
          </Button>
          <Button btntype="basic" onClick={onClickLogout}>
            로그아웃
          </Button>
        </ButtonWrap>
      ) : (
        <ButtonWrap>
          <Button btntype="basic" onClick={onClickBoard}>
            게시판
          </Button>
          <Button btntype="basic" onClick={onClickLogin}>
            로그인
          </Button>
          <Button btntype="basic" onClick={onClickSignUp}>
            회원가입
          </Button>
        </ButtonWrap>
      )}
    </HeaderWrap>
  );
};
export default Header;

const Stspan = styled.span`
  margin-right: 5px;
  font-size: 18px;
  color: white;
`;

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
  color: red;
  font-weight: bold;
`;
const ButtonWrap = styled.div`
  font-size: 24px;
`;
