// import styled from "styled-components";
// import { a11yHidden } from "styles/mixin";
// import { colors } from "theme/theme";

// const Textarea = ({ todoLabel, defaultValue, isHide, changeHandler }) => {
//   return (
//     <TodoTextareaContainer>
//       <label htmlFor="todo-textarea" className=""
//       {isHide ? "a11y-hidden" : ""}
//       >
//         {todoLabel}
//       </label>
//       <StyledTextarea
//         id="todo-textarea"
//         name="content"
//         rows="10"
//         cols="50"
//         placeholder="내용을 입력해주세요 (200자 이내)"
//         defaultValue={defaultValue}
//         onChange={changeHandler}
//       ></StyledTextarea>
//     </TodoTextareaContainer>
//   );
// };

// Textarea.defaultProps = {
//   todoLabel: "내용",
//   defaultValue: "",
//   isHide: false,
//   changeHandler: null,
// };

// export default Textarea;

// const TodoTextareaContainer = styled.div`
//   display: flex;
//   margin-top: 15px;
//   .a11y-hidden {
//     ${a11yHidden}
//   }
// `;

// const StyledTextarea = styled.textarea`
//   width: 90%;
//   border: 1px solid ${colors.lightGray};
//   border-radius: 5px;
//   margin-left: 10px;
//   padding: 12px;
// `;
