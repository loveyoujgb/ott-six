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

const FormInputContainer = styled.div``;

const FormInput = styled.input`
  padding-left: 10px;
  outline: none;
  ${(props) => {
    return (
      props.type === "basic" &&
      css`
        box-sizing: border-box;
        background-color: #363636;
        color: white;
        border: none;
        border-radius: 5px;
        width: 400px;
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
