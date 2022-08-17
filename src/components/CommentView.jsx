import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { __deleteComment, __updateComment } from "../redux/modules/moviesSlice";

const CommentView = ({ comment }) => {
  const dispatch = useDispatch();

  const [editComment, setEditComment] = React.useState(false);

  let updateCommentInput = () => {
    if (editComment) {
      setEditComment(false);
    } else {
      setEditComment(true);
    }
  };

  const deleteBtn = (id) => {
    if(window.confirm("댓글을 삭제하시겠습니까?")){
      dispatch(__deleteComment(id));
    }
  };

  const [updateComment, setUpdateComment] = useState({
    id: "",
    userContent: comment.userContent,
  });

  const changeEvent = (e) => {
    setUpdateComment({
      id: comment.id,
      userContent: e.target.value,
    });
  };

  const updateCommentAction = () => {
    dispatch(__updateComment(updateComment));
    updateCommentInput();
  };
  return (
    <>
      <div>
        <CommentBox>
          <CommentContent>
            {!editComment ? (
              <div>
                {/* <CommentTop className="comment_view">{comment.userName}</CommentTop> */}
                <CommentBottom className="comment_view">{comment.userContent}</CommentBottom>
              </div>
            ) : (
              // <Input onChange={changeEvent} name="userContent" type="text" value={updateComment.userContent}/>
              <StInput
              onChange={changeEvent}
              name="userContent"
              type="text"
              value={updateComment.userContent}
              />
            )}
          </CommentContent>
          <CommentButton>
            {!editComment ? (
              <div>
                {/* <Button
                  uibutton="edit"
                  btntype="ui-comment"
                  onClick={() => {
                    updateCommentInput();
                  }}
                /> */}
                <StEditButton
                onClick={() => {
                  updateCommentInput();
                }}
                >
                  수정하기
                  </StEditButton>
                {/* <Button
                  uibutton="delete"
                  btntype="ui-comment"
                  onClick={() => {
                    deleteBtn(comment.id);
                  }}
                /> */}
                <StDeleteButton
                onClick={() => {
                  deleteBtn(comment.id);
                }}
                >
                  삭제하기
                </StDeleteButton>
              </div>
            ) : (
              <div>
                <StCancelButton
                  onClick={() => {
                    updateCommentInput();
                  }}
                >
                  취소
                </StCancelButton>
                <StButton
                  onClick={() => {
                    updateCommentAction();
                  }}
                >
                  저장
                </StButton>
              </div>
            )}
          </CommentButton>
        </CommentBox>
      </div>
    </>
  );
};

export default CommentView;

const CommentBox = styled.div`
  width: 100%;
  display: flex;
  /* border-bottom: 1px solid #eee; */
  justify-content: space-between;
`;
const CommentContent = styled.div`
  width: 70%;
  height: 50px;
  border-radius: 5px;
  background-color: #eee;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  /* border: 3px solid rgb(251,188,4); */
`;

const CommentBottom = styled.div`
  font-size: 15px;
  padding-left: 20px;
`;

const StInput = styled.input`
  box-sizing: border-box;
  background-color: white;
  color: black;
  border: none;
  border-radius: 5px;
  width: 100%;
  height: 50px;
  margin-right: 20px;
`

const CommentButton = styled.div`
  display: flex;
  /* margin: 3px; */
  margin-bottom: 15px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const StEditButton = styled.button`
  width: 180px;
  height: 50px;
  border-radius: 5px;
  margin-right: 20px;
  border: none;
  border: 3px solid #35247b;
`
const StDeleteButton = styled.button`
  width: 180px;
  height: 50px;
  border-radius: 5px;
  border: none;
  border: 3px solid #35247b;
`

const StCancelButton = styled.button`
  width: 180px;
  height: 50px;
  border-radius: 5px;
  margin-right: 20px;
  border: 3px solid rgb(251,188,4);
`

const StButton = styled.button`
  width: 180px;
  height: 50px;
  border-radius: 5px;
  border: 3px solid rgb(251,188,4);
`