import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderWrap>
      <HeaderButtonLogo>

      </HeaderButtonLogo>

    </HeaderWrap>
  );
};
export default Header;

const HeaderWrap = styled.header`
  background-color: rgb(33,33,33);
  border: 1px solid rgb(221, 221, 221);
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 12px;
`;

const HeaderButtonLogo = styled.button``
