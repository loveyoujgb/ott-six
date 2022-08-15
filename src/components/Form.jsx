import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { __getMovies, __postMovies } from "../redux/modules/moviesSlice";
import Input from "./elements/Input";
import Button from "./elements/Button";

const Form = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [movie, setMovie] = useState({
        title: "",
        content: "",
    })

    useEffect(() => {
        dispatch(__getMovies())
    }, [dispatch])

    const { title, content } = movie;

    const onChangeHandler = (e) => {
        const { value, name } = e.target;
        setMovie({
            ...movie,
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
        dispatch(__postMovies(movie));
        navigate("/reviewboard")
        console.log(movie.title)
    }

    return (
        <FormContainer onSubmit={onSubmitHandler}>
            <FormFirstWrap>
                <div>리뷰 작성하기</div>
            </FormFirstWrap>
            <FormSecondWrap>
                <FormTitleWrap>
                    <StLabel>글 제목</StLabel>
                    {/* <Input
                        maxLength="50"
                        fontsize="24px"
                        pattern=".{1.5}"
                        title="3자 이상 50자 이내를 입력하세요"
                        type="title"
                        name="title"
                        value={title}
                        onChange={onChangeHandler}
                        placeholder="제목을 입력해주세요.(50자 이내)"
                        width="100%"
                        height="100%"
                    /> */}
                    <StFirstInput 
                    type="text"
                    name="title"
                    value={title}
                    onChange={onChangeHandler}
                    />
                </FormTitleWrap>
                <FormContentWrap>
                    <StLabel>글 내용</StLabel>
                    {/* <Input
                        maxLength="200"
                        fontsize="24px"
                        pattern=".{1.5}"
                        title="1자 이상 200자 이내를 입력하세요"
                        type="content"
                        name="content"
                        value={content}
                        onChange={onChangeHandler}
                        placeholder="내용을 입력해주세요.(200자 이내)"
                        width="100%"
                        height="500%"
                    /> */}
                    <StSecondInput 
                    type="text"
                    name="content"
                    value={content}
                    onChange={onChangeHandler}
                    />
                </FormContentWrap>
                <Button
                    btntype="gray"
                    type="submit"
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
const FormSecondWrap = styled.div`
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

const StFirstInput = styled.input`
    box-sizing: border-box;
    background-color: #363636;
    color: white;
    border: none;
    border-radius: 5px;
    width: 1300px;
    height: 50px;
`

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
const StSecondInput = styled.input`
    box-sizing: border-box;
    background-color: #363636;
    color: white;
    border: none;
    border-radius: 5px;
    width: 1300px;
    height: 450px;
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
    margin-top: 20px;
`