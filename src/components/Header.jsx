import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./elements/Button";
import { __loginCheck } from "../redux/modules/loginSlice";
import { logout, cookieCkeck } from "../actions/Cookie";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [token, setToken] = useState(false);
  const { isLoading, error, nickname } = useSelector((state) => state.login);

  useEffect(() => {
    if (cookieCkeck()) {
      dispatch(__loginCheck());
      setToken(true);
    } else {
      return;
    }
  }, []);

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
      <Button
        font="30"
        btntype="logo"
        onClick={() => {
          navigate("/");
        }}
      >
        OTTSIX
      </Button>
      {token ? (
        <ButtonWrap>
          <Stspan>{nickname}님 환영합니다</Stspan>
          <Button btntype="basic" onClick={onClickBoard} margin="5px" width="100px" height="35px" border="1px solid #35247b">
            게시판
          </Button>
          <Button btntype="basic" onClick={onClickLogout} margin="5px" width="100px" height="35px">
            로그아웃
          </Button>
        </ButtonWrap>
      ) : (
        <ButtonWrap>
          <Button btntype="basic" onClick={onClickBoard} margin="5px" width="100px" height="35px" border="1px solid #35247b">
            게시판
          </Button>
          <Button btntype="basic" onClick={onClickLogin} margin="5px" width="100px" height="35px" border="1px solid #35247b">
            로그인
          </Button>
          <Button btntype="basic" onClick={onClickSignUp} margin="5px" width="100px" height="35px" border="1px solid #35247b">
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

const ButtonWrap = styled.div`
  font-size: 24px;
`;
