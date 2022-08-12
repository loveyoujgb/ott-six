import styled, { css } from "styled-components";

const Input = ({ value, defaultValue, id, title, name, placeholder, width, labelText, isHide, changeHandler, minLength, maxLength }) => {
  return (
    <FormInputContainer>
      <label htmlFor={id} className={isHide ? "a11y-hidden" : ""}>
        {labelText}
      </label>
      <FormInput
        type={type}
        id={id}
        title={title}
        name={name}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        width={width}
        onChange={changeHandler}
        minLength={minLength}
        maxLength={maxLength}
      />
    </FormInputContainer>
  );
};

Input.defaultValue = {
  value: "",
  defaultValue: "",
  id: "",
  name: "",
  placeholder: "",
  width: "",
  labelText: "",
  isHide: false,
  changeHandler: null,
  minLength: 0,
  maxLength: 200,
};

export default Input;

const FormInputContainer = styled.div`
  .a11y-hidden {
    ${a11yHidden}
  }
`;

const FormInput = styled.input`
  outline: none;
  ${(props) => {
    return (
      props.type === "text" &&
      css`
        font-size: 18px;
        width: ${(props) => props.width || "90%"};
        padding: 10px;
        margin: 10px;
        border: 1px solid ${colors.lightGray};
        border-radius: 3px;
      `
    );
  }}
`;
