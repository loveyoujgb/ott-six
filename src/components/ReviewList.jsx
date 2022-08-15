import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __getMovies } from "../redux/modules/moviesSlice";
import Review from "./Review";

const ReviewList = () => {

    const dispatch = useDispatch();
    const {movies, isLoading, error} = useSelector((state) => state.movies);

    useEffect(() => {
        dispatch(__getMovies())
    }, [dispatch])

    if(isLoading){
        return <div>로딩중 ...</div>
    }
    if(error){
        return <div>{error.message}</div>
    }

    return(
        <FormContainer>
            <FormFirstWrap>
                게시판
            </FormFirstWrap>
            <FormSecondWrap>
                <ListForm>
                {movies?.map((movie) => (
                    <Review key = {movie.id} id = {movie.id} movie = {movie}/>
                ))}
                    {/* <ReviewTitle>
                        글 제목
                    </ReviewTitle>
                    <ReviewTime>
                        작성 시간
                    </ReviewTime>
                    <ReviewUserName>
                        작성자명
                    </ReviewUserName> */}
                </ListForm>
                {/* API 받으면 Revie 맵 돌려서 넣을 예정 */}
            </FormSecondWrap>
        </FormContainer>
    )

}

export default ReviewList;

const FormContainer = styled.form`
    /* border: 1px solid white; */
    width: 1400px;
    height: 90vh;
    display: flex;
    margin: auto;
    flex-direction: column;
    padding: 20px;
`

const FormFirstWrap = styled.div`
    background-color: rgb(53,36,123);
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
    height: 100%; 
    margin-top: 20px;
    display:flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
`

const ListForm = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`

const ReviewTitle = styled.div`
    width : 60%;
    background-color: rgb(138,138,138);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    padding: 10px;
    margin: 10px;
`

const ReviewTime = styled.div`
    width : 15%;
    background-color: rgb(138,138,138);
    padding: 10px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`

const ReviewUserName = styled.div`
    width: 15%;
    background-color: rgb(138,138,138);
    padding: 10px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`