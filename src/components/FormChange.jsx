import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"
// import Button from "./elements/Button";

const FormChange = () => {

    const navigate = useNavigate()

    const onSubmitHandler = (e) => {
        e.preventDefault();
        // dispatchEvent(
        //     __putTodos({
        //         ...review,
        //         id:param.id,
        //         content: updateContet,
        //     })
        // )
        // dispatch(__getTodos());
        // navigate(`/reviewdetail/${param.id}`)
    }

    return (
        <FormContainer onSubmit={onSubmitHandler}>
            <FormSecondWrap>
                <FormTitleWrap>
                    <StLabel>글 제목</StLabel>
                    <StFirstInput />
                </FormTitleWrap>
                <FormContentWrap>
                    <StLabel>글 내용</StLabel>
                    <StSecondInput />
                </FormContentWrap>
                <Buttons>
                    <StButton
                    onClick={() => {
                        navigate(`/reviewboard`)
                    }}
                    >수정하기</StButton>
                    <StButton
                    onClick={() => {
                        navigate(`/reviewboard`)
                    }}
                    >삭제하기</StButton>
                </Buttons>
            </FormSecondWrap>
        </FormContainer>
    )
}

export default FormChange;

const FormContainer = styled.form`
    /* border: 1px solid white; */
    width: 90%;
    height: 90%;
    display: flex;
    margin: auto;
    flex-direction: column;
    padding: 20px;
`

const FormSecondWrap = styled.form`
    background-color: rgb(45,45,45);
    height: 100%; 
    margin-top: 20px;
    display:flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
`
const FormTitleWrap = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    width: 95%;
`

const StFirstInput = styled.input`
    margin-top: 10px;
    height: 50px;
`

const FormContentWrap = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    width: 95%;
`
const StLabel = styled.label`
    color: white;
    margin-bottom: 5px;
`
const StSecondInput = styled.input`
    margin-top: 10px;
    margin-bottom: 20px;
    height: 400px;
`
const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: right;
    gap: 20px;
    width: 95%;
`

const StButton = styled.button`
    background-color: rgb(53,36,123);
    color: white;
    border: none;
    width: 10%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
`