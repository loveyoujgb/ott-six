import styled, { css } from "styled-components";

const Input = ({ type, value, defaultValue, id, title, name, placeholder, width, labelText, changeHandler, minLength, maxLength }) => {
  return (
    <FormInputContainer>
      <label htmlFor={id}>{labelText}</label>
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

const FormInput = styled.input`
  outline: none;
  ${(props) => {
    return props.type === "text" && css``;
  }}
`;
