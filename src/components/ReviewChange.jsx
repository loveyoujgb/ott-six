import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom"
import { __deleteMovies, __getMovies, __putMovies } from "../redux/modules/moviesSlice";
// import Button from "./elements/Button";

const ReviewChange = () => {

    const param = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const { isLoading, error, movies } = useSelector((state) => state.movies);
    const movie = movies.find((movie) => movie.id === parseInt(movie.id))

    const [updateTitle, setUpdateTitle] = useState("");
    const [updateContent, setUpdateContent] = useState("")

    const onChangeTitleHandler = (e) => {
        setUpdateTitle(e.target.value);
    }

    const onChangeContentHandler = (e) => {
        setUpdateContent(e.target.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(
            __putMovies({
                ...movie,
                id:param.id,
                title: updateTitle,
                content: updateContent,
            })
        )
        dispatch(__getMovies());
        navigate(`/detail/${param.id}`)
    }

    if(isLoading) {
        return <div>로딩중 ...</div>
    }
    if(error) {
        return <div>{error.message}</div>
    }

    // const onClickDeleteHandler = (e) => {
    //     e.stopPropagation();
    //     if(window.confirm("정말 삭제하시겠습니까?"))
    //     dispatch(__deleteMovies(movie.id))
    //     // navigate(`/reviewboard`)
    // }

    return (
        <FormContainer onSubmit={onSubmitHandler}>
            <FormSecondWrap>
                <FormTitleWrap>
                    <StLabel>글 제목</StLabel>
                    <StFirstInput 
                    value={updateTitle}
                    onChange={onChangeTitleHandler}
                    />
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
                    >완료하기</StButton>
                    {/* <StButton
                    onClick={() => {
                        onClickDeleteHandler()
                    }}
                    >삭제하기</StButton> */}
                </Buttons>
            </FormSecondWrap>
        </FormContainer>
    )
}

export default ReviewChange;

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
    background-color: rgb(251,188,4);
    color: white;
    border: none;
    width: 10%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
`