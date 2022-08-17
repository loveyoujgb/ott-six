import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { __postComment, __getComments } from "../redux/modules/moviesSlice";

import { useParams } from "react-router-dom";
import CommentView from "./CommentView";

// import Button from "./elements/Button";
// import Input from "./elements/Input";

const Comment = () => {
  const dispatch = useDispatch();

  const comments = useSelector((state) => state.movies.comments);

  useEffect(() => {
    dispatch(__getComments());
  }, [dispatch]);

  const [comment, setComment] = useState({
    userContent: "",
  });
  const param = useParams();

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setComment({
      ...comment,
      userId: param.id,
      [name]: value,
    });
  };

  const postComment = (e) => {
    e.preventDefault();
    if(userContent===''){
      window.alert("내용을 입력해주세요");
      return false;
    }
    dispatch(__postComment(comment));
    
    setComment({
      userContent:'',
    });
  };

  const {userContent} = comment;
  const [commentShow, setCommentShow] = useState(true);
  return (
    <>
      <CommentWrap commentShow={commentShow}>
        <CommentSecontWrap>
        <div
          onClick={() => {
            setCommentShow(!commentShow);
          }}
        >
          <span style={{ fontSize: '20px', fontWeight: "bold", color: "white" }}>
            {commentShow ? '댓글 올리기' : '댓글 내리기'}
          </span>
        </div>
        <ShowHideBox>
          <CommentForm onSubmit={postComment}>
            <StInput
              type='text'
              name='userContent'
              onChange={onChangeHandler}
              maxLength='100'
              placeholder='댓글을 추가하세요.(100자 이내)'
              value={userContent}
            />
            <StButton type="submit">
              추가하기
            </StButton>
          </CommentForm>
          <CommentLists>
            {comments.map((v) =>
              Number(v.userId) === Number(param.id) ? (
                <div key={v.id}>
                  <CommentView comment={v} />
                </div>
              ) : null
            )}
          </CommentLists>
        </ShowHideBox>
        </CommentSecontWrap>
      </CommentWrap>
    </>
  );
};

export default Comment;

const CommentWrap = styled.div`
  background-color: #363636;
  border-top: 1px solid #eee;
  transform: translate(-50%, 90%);
  transform: ${({ commentShow }) => (commentShow ? "" : `translate(-50%, -10%)`)};
  height: 400px;
  position: fixed;
  max-width: 1400px;
  width: 1400px;
  bottom: 0%;
  left: 50%;
  display: flex;
  justify-content: center;
  border-radius: 5px;
`;

const CommentSecontWrap = styled.div`
  width: 95%;
  margin-top: 20px;
`
const ShowHideBox = styled.div`
  height: 100%;
  width: 100%;
`;
const CommentForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const CommentLists = styled.div`
  overflow: auto;
  height: 80%;
  width: 100%;
  background-color: #363636;
`;

const StInput = styled.input`
    box-sizing: border-box;
    background-color: white;
    color: black;
    border: none;
    border-radius: 5px;
    width: 85%;
    height: 50px;
    margin-right: 20px;
    padding-left: 20px;
    :hover{
      border: 3px solid rgb(53,36,123);
    }
    /* text-align: center; */
`

const StButton = styled.button`
  background-color: #35247b;
  border: none;
  border-radius: 5px;
  width: 15%;
  height: 50px;
  color: white;
  :hover{
      border: 1px solid rgb(251,188,4);
        }
`