import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Review from "./Review";

const ReviewList = () => {

    // const {movies, isLoading, error} = useSelector((state) => state.movies);

    return(
        <FormContainer>
            <FormFirstWrap>
                게시판
            </FormFirstWrap>
            <FormSecondWrap>
                <ListForm
                // {movies?.map((movie) => (
                //     <Review key = {movie.id} id = {movie.id} movie = {movie}/>
                // ))}
                >
                    <ReviewTitle>
                        글 제목
                    </ReviewTitle>
                    <ReviewTime>
                        작성 시간
                    </ReviewTime>
                    <ReviewUserName>
                        작성자명
                    </ReviewUserName>
                </ListForm>
                {/* API 받으면 Revie 맵 돌려서 넣을 예정 */}
                <Review></Review>
            </FormSecondWrap>
        </FormContainer>
    )

}

export default ReviewList;

const FormContainer = styled.form`
    /* border: 1px solid white; */
    width: 90%;
    height: 90%;
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
const FormSecondWrap = styled.form`
    background-color: rgb(45,45,45);
    height: 100%; 
    margin-top: 20px;
    display:flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
`

const ListForm = styled.form`
    width: 90%;
    display: flex;
    flex-direction: row;
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