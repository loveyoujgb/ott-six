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
        width: 100px;
        height: 35px;
      `
    );
  }}
  ${(props) => {
    return (
      props.btntype === "gray" &&
      css`
        background-color: #363636;
        border: transparent;
        color: white;
        border-radius: 5px;
        margin: 5px;
        width: 200px;
        height: 40px;
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
        border-radius: 5px;
        width: 400px;
        height: 50px;
        margin-top: 10px;
      `
    );
  }}
`;
