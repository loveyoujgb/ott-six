import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderWrap>
      <HeaderText>모두의 투두리스트</HeaderText>
    </HeaderWrap>
  );
};
export default Header;

const HeaderText = styled.div``;

const HeaderWrap = styled.header``;
