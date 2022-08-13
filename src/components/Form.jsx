import React from "react";
import styled from "styled-components";

const Form = () => {

    return(
        <FormFirstWrap>
            <FormSecondWrap>
                <FormAddReviewWrap>
                    <Stlabel>글 제목</Stlabel>
                    <input></input>
                    <Stlabel>글 내용</Stlabel>
                    <input></input>
                </FormAddReviewWrap>
                <button>작성하기</button>
            </FormSecondWrap>
        </FormFirstWrap>
    )

}

export default Form;

const FormFirstWrap = styled.form`
    height: 100%;
`

const FormSecondWrap = styled.div`
    background-color: rgb(45,45,45);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;

`

const FormAddReviewWrap = styled.div`
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
    text-decoration: none;
    outline: none;
`
const Stlabel = styled.label`
    color: white;
    display: block;
    font-size: 24px;
    font-weight: bold;
    margin: 20px 0;
`