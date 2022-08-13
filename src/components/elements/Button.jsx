import styled, { css } from "styled-components";

const Button = ({ btntype, type, onClick, children }) => {
  return (
    <StButton type={type} onClick={onClick} btntype={btntype}>
      {children}
    </StButton>
  );
};

export default Button;

const StButton = styled.button`
  cursor: pointer;
  ${(props) => {
    return (
      props.btntype === "basic" &&
      css`
        background-color: #363636;
        border: transparent;
        color: white;
        margin: 5px;
        width: 80px;
        height: 30px;
      `
    );
  }}
  ${(props) => {
    return (
      props.btntype === "blue" &&
      css`
        background-color: #35247b;
        border: transparent;
        color: white;
        margin: 5px;
        width: 80px;
        height: 30px;
      `
    );
  }}
`;
