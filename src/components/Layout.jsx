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
  position: fixed;
  top: 0;
  width: 100%;
  overflow-y: scroll;
`;

const StLayoutContents = styled.div`
  height: 100vh;
  background-color: #181818;
`;
