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
  border: none;
  height: 100%;
  pointer-events: none;
  position: fixed;
  top: 0;
  width: 100%;
`;

const StLayoutContents = styled.div`
  height: 100vh;
  background-color: #181818;
`;
