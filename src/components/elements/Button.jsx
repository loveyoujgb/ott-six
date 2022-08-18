import styled, { css } from "styled-components";

const Button = ({ font, outline, border, margin, height, width, btntype, type, onClick, children, disabled }) => {
  return (
    <StButton font={font} outline={outline} border={border} margin={margin} height={height} width={width} type={type} onClick={onClick} btntype={btntype} disabled={disabled}>
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
        margin: ${(props) => props.margin};
        width: ${(props) => props.width};
        height: ${(props) => props.height};
        border-radius: 5px;
        font-size: ${({ font }) => `${font}px`};
        font-weight: bold;
        :hover {
          border: ${({border}) => `${border}`}
        }
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
        margin: ${(props) => props.margin};
        width: ${(props) => props.width};
        height: ${(props) => props.height};
        font-size: ${({ font }) => `${font}px`};
        font-weight: bold;
        &:disabled {
          cursor: default;
          opacity: 0.5;
        }
        :hover {
          border: ${({border}) => `${border}`}
        }
      `
    );
  }}

${(props) => {
    return (
      props.btntype === "yellow" &&
      css`
        background-color: rgb(251,188,4);
        border: transparent;
        color: white;
        border-radius: 5px;
        margin: ${(props) => props.margin};
        width: ${(props) => props.width};
        height: ${(props) => props.height};
        font-size: ${({ font }) => `${font}px`};
        font-weight: bold;
        &:disabled {
          cursor: default;
          opacity: 0.5;
        }
        :hover {
          border: ${({border}) => `${border}`}
        }
      `
    );
  }}
${(props) => {
    return (
      props.btntype === "white" &&
      css`
        background-color: white;
        border: ${({outline}) => `${outline}`}
        border-radius: 5px;
        margin: ${(props) => props.margin};
        width: ${(props) => props.width};
        height: ${(props) => props.height};
        &:disabled {
          cursor: default;
          opacity: 0.5;
        }
        :hover {
          border: ${({border}) => `${border}`}
        }
      `
    );
  }}
  

  ${(props) => {
    return (
      props.btntype === "logo" &&
      css`
        background-color: transparent;
        border: none;
        font-size: ${({ font }) => `${font}px`};
        color: red;
        font-weight: bold;
      `
    );
  }}
`;
