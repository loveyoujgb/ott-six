import styled from "styled-components";
import Header from "../components/Header";

const Layout = (props) => {
  return (
    <StLayoutContainer>
      <Header />
      <StLayoutContents>{props.children}</StLayoutContents>
    </StLayoutContainer>
  );
};

export default Layout;

const StLayoutContainer = styled.div`
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  text-decoration: none;
  outline: none;`;

const StLayoutContents = styled.div`
  height: calc(100vh - 100px);
  background-color: rgb(255, 255, 255);
  padding: 24px;
`;
