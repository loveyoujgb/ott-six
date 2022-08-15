import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom"
import { __deleteMovies, __getMovies } from "../redux/modules/moviesSlice";
// import Button from "./elements/Button";

const Detail = () => {

    const param = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const {isLoading, error, movies} = useSelector((state) => state.movies);
    const movie = movies.find((movie) => movie.id === parseInt(movie.id))

    useEffect(() => {
        dispatch(__getMovies());
    }, [dispatch])

    // const onSubmitHandler = (e) => {
    //     e.preventDefault();
    //     dispatchEvent(
    //         __putTodos({
    //             ...review,
    //             id:param.id,
    //             content: updateContet,
    //         })
    //     )
    //     dispatch(__getTodos());
    //     navigate(`/reviewdetail/${param.id}`)
    // }

    // const onClickDeleteHandler = (e) => {
    //     e.stopPropagation();
    //     if(window.confirm("정말 삭제하시겠습니까?"))
    //     dispatch(__deleteMovies(movie.id))
    //     // navigate(`/reviewboard`)
    // }

    return (
        <FormContainer>
            <FormSecondWrap>
                <FormTitleWrap>
                    <StLabel>글 제목</StLabel>
                    <StTitle>{movie.title}</StTitle>
                    {/* <div>{movie.title}</div> */}
                    {/* <StFirstInput /> */}
                </FormTitleWrap>
                <FormContentWrap>
                    <StLabel>글 내용</StLabel>
                    <StContent>{movie.content}</StContent>
                    {/* <div>{movie.content}</div> */}
                    {/* <StSecondInput /> */}
                </FormContentWrap>
                <Buttons>
                    <StButton
                    onClick={() => {
                        navigate(`/detail/${param.id}/change`)
                    }}
                    >수정하기</StButton>
                    <StButton
                    // onClick={() => {
                    //     onClickDeleteHandler()
                    // }}
                    >삭제하기</StButton>
                </Buttons>
            </FormSecondWrap>
        </FormContainer>
    )
}

export default Detail;

const FormContainer = styled.form`
    /* border: 1px solid white; */
    width: 1400px;
    height: 90vh;
    display: flex;
    margin: auto;
    flex-direction: column;
    padding: 20px;
`

const FormSecondWrap = styled.div`
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

const StTitle = styled.div`
    margin-top: 10px;
    height: 50px;
    background-color: white;
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
const StContent = styled.div`
    margin-top: 10px;
    margin-bottom: 20px;
    height: 400px;
    background-color: white;
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