import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./elements/Button";

const Header = () => {
  const navigate = useNavigate();

  const onClickBoardHandler = () => {
    navigate("/reviewboard")
  }

  const onClickLoginHandler = () => {
    navigate("/login")
  }

  return (
    <HeaderWrap>
      <LogoButton
      onClick={() => {
        navigate("/")
      }}
      >OTTSIX</LogoButton>
      <ButtonWrap>
        <Button 
        btntype="basic"
        onClick={onClickBoardHandler}
        >
          게시판</Button>
        <Button 
        btntype="basic"
        onClick={onClickLoginHandler}
        >로그인</Button>
        <Button btntype="basic">회원가입</Button>
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
  color: #4729be;
  font-weight: bold;
`
const ButtonWrap = styled.div`
  font-size: 24px;
`;
