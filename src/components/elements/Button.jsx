import styled, { css } from "styled-components";

const Button = ({ widthSize, btntype, type, onClick, children, disabled }) => {
  return (
    <StButton widthSize={widthSize} type={type} onClick={onClick} btntype={btntype} disabled={disabled}>
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
        border-radius: 5px;
        font-weight: bold;
        :hover{
          border: 3px solid #35247b;
        }
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
        /* font-weight: bold; */
        :hover{
          border: 1px solid rgb(251,188,4);
        }
      `
    );
  }}
  ${(props) => {
    return (
      props.btntype === "blue" &&
      css`
        /* display: flex;
        align-items: center;
        justify-content: center; */
        background-color: #35247b;
        border: transparent;
        color: white;
        border-radius: 5px;
        width: ${({ widthSize }) => `${widthSize}px`};
        height: 50px;
        /* margin-top: 10px; */
        &:disabled {
          cursor: default;
          opacity: 0.5;
        }
      `
    );
  }}

${(props) => {
    return (
      props.btntype === "purple" &&
      css`
        background-color: #35247b;
        border: transparent;
        color: white;
        border-radius: 5px;
        width: 200px;
        height: 50px;
        margin-top: 10px;
      `
    );
  }}
`;
