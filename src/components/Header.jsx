import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./elements/Button";

const Header = () => {
  const navigate = useNavigate();
  const onClickeee = () => {
    // navigate("/");
    console.log("hello");
  };
  return (
    <HeaderWrap>
      <HeaderText
        onClick={() => {
          navigate("/");
        }}
      >
        로고
      </HeaderText>
      <ButtonWrap>
        <Button onClick={onClickeee} btntype="basic">
          게시판
        </Button>
        <Button btntype="basic">로그인</Button>
        <Button btntype="basic">회원가입</Button>
      </ButtonWrap>
    </HeaderWrap>
  );
};
export default Header;

const HeaderText = styled.div`
  color: white;
`;

const ButtonWrap = styled.div`
  font-size: 24px;
`;

const HeaderWrap = styled.div`
  background-color: #212121;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 12px;
`;
