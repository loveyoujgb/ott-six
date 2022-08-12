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
    return props.btntype === "basic" && css``;
  }}
`;
