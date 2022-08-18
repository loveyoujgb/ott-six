import styled, { css } from "styled-components";

const Input = ({ disabled, defaultValue, type, inputType, value, id, title, name, placeholder, width, labelText, onChange, minLength, maxLength }) => {
  return (
    <FormInputContainer>
      <label htmlFor={id}>{labelText}</label>
      <FormInput
        disabled={disabled}
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
        :focus {
          border: 3px solid #35247b;
        }
      `
    );
  }}
`;
