import styled, { css } from "styled-components";

const Input = ({ defaultValue, type, inputType, value, id, title, name, placeholder, width, labelText, onChange, minLength, maxLength }) => {
  return (
    <FormInputContainer>
      <label htmlFor={id}>{labelText}</label>
      <FormInput
        type={type}
        inputType={inputType}
        id={id}
        title={title}
        name={name}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        width={width}
        onChange={onChange}
        minLength={minLength}
        maxLength={maxLength}
      />
    </FormInputContainer>
  );
};

Input.defaultValue = {
  value: "",
  inputType: "",
  type: "",
  // defaultValue: "",
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

const FormInputContainer = styled.div``;

const FormInput = styled.input`
  padding-left: 10px;
  outline: none;
  ${(props) => {
    return (
      props.inputType === "basic" &&
      css`
        box-sizing: border-box;
        background-color: #363636;
        color: white;
        border: none;
        border-radius: 5px;
        width: 360px;
        height: 45px;
      `
    );
  }}
  ${(props) => {
    return (
      props.type === "title" &&
      css`
        box-sizing: border-box;
        background-color: #363636;
        color: white;
        border: none;
        border-radius: 5px;
        width: 1300px;
        height: 50px;
      `
    );
  }}
    ${(props) => {
    return (
      props.type === "content" &&
      css`
        box-sizing: border-box;
        background-color: #363636;
        color: white;
        border: none;
        border-radius: 5px;
        width: 1300px;
        height: 450px;
      `
    );
  }}
`;
