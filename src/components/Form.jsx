import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { __getMovies } from "../redux/modules/moviesSlice";
import Input from "./elements/Input";
import Button from "./elements/Button";

const Form = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [review, setReview] = useState({
        usename: "",
        title: "",
        content: "",
    })

    useEffect(() => {
        dispatch(__getMovies())
    }, [dispatch])

    const { username, title, content } = review;

    const onChangeHandler = (e) => {
        const { value, name } = e.target;
        setReview({
            ...review,
            [name]: value,
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (title === "") {
            return alert("제목을 입력해주세요");
        } else if (content === "") {
            return alert("내용을 입력해주세요");
        }
        // dispatch(__postTtodos(review));
        navigate("/reviewboard")
    }

    return (
        <FormContainer onSubmit={onSubmitHandler}>
            <FormFirstWrap>
                {/* <StFormTitle>리뷰 작성하기</StFormTitle> */}
                <div>리뷰 작성하기</div>
            </FormFirstWrap>
            <FormSecondWrap>
                <FormTitleWrap>
                    <StLabel>글 제목</StLabel>
                    <Input
                        maxLength="50"
                        fontsize="24px"
                        pattern=".{1.5}"
                        title="3자 이상 50자 이내를 입력하세요"
                        type="title"
                        name="title"
                        value={title}
                        onChane={onChangeHandler}
                        placeholder="제목을 입력해주세요.(50자 이내)"
                        width="100%"
                        height="100%"
                    />
                    {/* <StFirstInput /> */}
                </FormTitleWrap>
                <FormContentWrap>
                    <StLabel>글 내용</StLabel>
                    <Input
                        maxLength="200"
                        fontsize="24px"
                        pattern=".{1.5}"
                        title="1자 이상 200자 이내를 입력하세요"
                        type="content"
                        name="content"
                        value={content}
                        onChane={onChangeHandler}
                        placeholder="내용을 입력해주세요.(200자 이내)"
                        width="100%"
                        height="500%"
                    />
                    {/* <StSecondInput /> */}
                </FormContentWrap>
                {/* <StButton
                    type="submit"
                    // onChange={onChangeHandler}
                    onClick={() => {
                        navigate("/reviewboard")
                    }}
                >작성하기</StButton> */}
                <Button
                    btntype="gray"
                    // onClick={onClickLoginHandler}
                >작성하기</Button>
            </FormSecondWrap>
        </FormContainer>

    )
}

export default Form;

const FormContainer = styled.form`
    /* border: 1px solid white; */
    width: 1400px;
    height: 90vh;
    display: flex;
    margin: auto;
    flex-direction: column;
    /* padding: 20px; */
`

const FormFirstWrap = styled.div`
    /* background-color: rgb(53,36,123); */
    background-color: rgb(251,188,4);
    color: white;
    border: none;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const FormSecondWrap = styled.form`
    background-color: rgb(45,45,45);
    height: 80vh; 
    margin-top: 20px;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const FormTitleWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
`

// const StFirstInput = styled.input`
//     margin-top: 10px;
//     height: 50px;
// `

const FormContentWrap = styled.div`
    margin-top: 30px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    width: 95%;
`
const StLabel = styled.label`
    color: white;
    margin-bottom: 20px;
`
// const StSecondInput = styled.input`
//     margin-top: 10px;
//     margin-bottom: 50px;
//     height: 400px
// `
const StButton = styled.button`
    background-color: rgb(53,36,123);
    color: white;
    border: none;
    width: 10%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`