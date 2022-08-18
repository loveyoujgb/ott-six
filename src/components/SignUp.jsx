import styled from "styled-components";
import { useCallback, useEffect, useState } from "react";
import { __loginCheck } from "../redux/modules/loginSlice";
import Button from "./elements/Button";
import Input from "./elements/Input";
import axios from "axios";
import { cookieCkeck } from "../actions/Cookie";
import { useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;

const SignUp = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (cookieCkeck()) {
      alert("로그아웃을 해주세요.");
      navigate("/");
    } else {
      return;
    }
  }, []);

  const [username, setusername] = useState("");
  const [nickname, setnickname] = useState("");
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState("");

  //오류메시지 상태저장
  const [usernameMessage, setusernameMessage] = useState("");
  const [nicknameMessage, setnicknameMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [validPasswordMessage, setValidPasswordMessage] = useState("");

  // 유효성 검사
  const [isUsername, setIsUsername] = useState(false);
  const [isNickname, setIsNickname] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [nicknameValid, setNicknameVaild] = useState(false);
  const [usernameVaild, setUsernameVaild] = useState(false);

  const postSignUp = async () => {
    try {
      await axios.post(`${API_URL}/member/signup`, {
        username: username,
        nickname: nickname,
        password: password,
        validPassword: validPassword,
      });
      alert("회원가입이 완료되었습니다. 로그인을 해주세요.");
    } catch (error) {
      alert("회원가입이 실패하였습니다");

      return;
    }
  };

  const onCreate = (e) => {
    e.preventDefault();
    postSignUp({
      username: username,
      nickname: nickname,
      password: password,
      validPassword: validPassword,
    });
    navigate("/login");
    setusername("");
    setnickname("");
    setPassword("");
    setValidPassword("");
  };

  //아이디(username) 중복확인
  const usernameCheck = async () => {
    const data = await axios.post(`${API_URL}/member/validateId`, { username: username });
    if (username.trim() === "") {
      alert("아이디를 입력해주세요.");
    } else if (!isUsername) {
      alert("아이디를 조건에 맞게 입력해주세요.");
    } else if (!data.data) {
      alert("이미 가입한 아이디입니다.");
    } else {
      alert("가입 가능합니다");
      setUsernameVaild(true);
    }
  };

  const onClickusernameCheck = () => {
    usernameCheck({ username: username });
  };

  //닉네임 중복확인
  const nicknameCheck = async () => {
    const data = await axios.post(`${API_URL}/member/validateNickname`, { nickname: nickname });
    if (nickname.trim() === "") {
      alert("닉네임을 입력해주세요.");
    } else if (!isNickname) {
      alert("닉네임을 조건에 맞게 입력해주세요.");
    } else if (!data.data) {
      alert("이미 가입한 닉네임입니다.");
    } else {
      alert("가입 가능합니다");
      setNicknameVaild(true);
    }
  };

  const onClickunicknameCheck = () => {
    nicknameCheck({ nickname: nickname });
  };

  //아이디
  const onChangeusername = useCallback((e) => {
    const emailCurrent = e.target.value;
    setusername(emailCurrent);
    const emailRegex = /^[a-zA-Z](?=.{0,15}[0-9])[0-9a-zA-Z]{4,15}$/;
    //6자리 이상, 영문 대소문자 가능
    if (!emailRegex.test(emailCurrent)) {
      setusernameMessage("5~15자의 영문 대 소문자+숫자 조합으로 입력해주세요.");
      setIsUsername(false);
    } else {
      setusernameMessage("올바른 아이디 형식입니다 :)");
      setIsUsername(true);
    }
  }, []);

  // 닉네임
  const onChangenickname = useCallback((e) => {
    const emailCurrent = e.target.value;
    setnickname(emailCurrent);
    const emailRegex = /^([a-zA-Z0-9가-힣]){3,10}$/;
    if (!emailRegex.test(emailCurrent)) {
      setnicknameMessage("3~10자의 영문 대 소문자, 숫자, 한글을 입력해주세요.");
      setIsNickname(false);
    } else {
      setnicknameMessage("올바른 닉네임 형식입니다 : )");
      setIsNickname(true);
    }
  }, []);

  // 비밀번호
  const onChangePassword = useCallback(
    (e) => {
      const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
      const passwordCurrent = e.target.value;
      setPassword(e.target.value);
      if (validPassword === passwordCurrent) {
        setValidPasswordMessage("비밀번호를 똑같이 입력했어요.");
      } else {
        setValidPasswordMessage("비밀번호가 불일치합니다. 다시 입력해주세요.");
      }
      if (!passwordRegex.test(passwordCurrent)) {
        setPasswordMessage("숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!");
        setIsPassword(false);
      } else {
        setPasswordMessage("안전한 비밀번호입니다.");
        setIsValidPassword(false);
        setIsPassword(true);
      }
    },
    [validPassword, password]
  );

  // 비밀번호 확인
  const onChangeValidPassword = useCallback(
    (e) => {
      setValidPassword(e.target.value);
      const ValidPasswordCurrent = e.target.value;
      if (password === ValidPasswordCurrent) {
        setValidPasswordMessage("비밀번호를 똑같이 입력했어요.");
        setIsValidPassword(true);
      } else {
        setValidPasswordMessage("비밀번호가 불일치합니다. 다시 입력해주세요.");
        setIsValidPassword(false);
      }
    },
    [validPassword, password]
  );

  return (
    <Whole>
      <LoginContainer onSubmit={onCreate}>
        <ButtonWrap>
          <Button
            type="button"
            font="55"
            btntype="logo"
            onClick={() => {
              navigate("/");
            }}
          >
            OTTSIX
          </Button>
          <Title>회원가입</Title>
          {/* 아이디 */}
          <FirstValidButton>
            <Input
              disabled={usernameVaild}
              name="username"
              onChange={onChangeusername}
              value={username}
              placeholder="아이디"
              type="text"
              inputType="basic"
            ></Input>
            <Button
              type="button"
              onClick={onClickusernameCheck}
              height="45px"
              width="70px"
              btntype="blue"
              disabled={usernameVaild}
              border="1px solid rgb(251, 188, 4)"
            >
              {usernameVaild ? "확인완료" : "중복확인"}
              {/* 중복확인 */}
            </Button>
          </FirstValidButton>
          {username.length > 0 && <span className={`message ${isUsername ? "success" : "error"}`}>{usernameMessage}</span>}
          {/* 닉네임 */}
          <FirstValidButton>
            <Input
              disabled={nicknameValid}
              name="nickname"
              onChange={onChangenickname}
              value={nickname}
              placeholder="닉네임"
              type="text"
              inputType="basic"
            ></Input>
            <Button
              type="button"
              onClick={onClickunicknameCheck}
              height="45px"
              width="70px"
              btntype="blue"
              disabled={nicknameValid}
              border="1px solid rgb(251, 188, 4)"
            >
              {nicknameValid ? "확인완료" : "중복확인"}
              {/* 중복확인 */}
            </Button>
          </FirstValidButton>
          {nickname.length > 0 && <span className={`message ${isNickname ? "success" : "error"}`}>{nicknameMessage}</span>}
          {/* 비밀번호 */}
          <Input name="password" onChange={onChangePassword} value={password} placeholder="비밀번호" type="password" inputType="basic"></Input>
          {password.length > 0 && <span className={`message ${isPassword ? "success" : "error"}`}>{passwordMessage}</span>}
          {/* 비밀번호 확인 */}
          <Input
            name="validPassword"
            onChange={onChangeValidPassword}
            value={validPassword}
            placeholder="비밀번호 확인"
            type="password"
            inputType="basic"
          ></Input>
          {validPassword.length > 0 && <span className={`message ${isValidPassword ? "success" : "error"}`}>{validPasswordMessage}</span>}
          {nicknameValid && usernameVaild ? <span>중복확인을 완료했습니다</span> : <span>중복확인을 해주세요</span>}
          <Button
            height="45px"
            width="360px"
            type="submit"
            btntype="blue"
            border="1px solid rgb(251, 188, 4)"
            disabled={!(usernameVaild && nicknameValid && isUsername && isNickname && isPassword && isValidPassword)}
          >
            회원가입
          </Button>
        </ButtonWrap>
      </LoginContainer>
    </Whole>
  );
};
export default SignUp;

const Whole = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: black;
`;

const LoginContainer = styled.form`
  padding: 50px;
  border-radius: 5px;
  background-color: #181818;
`;

const ButtonWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 460px;
  flex-direction: column;
  gap: 10px;
  background-color: #181818;
`;

const FirstValidButton = styled.div`
  gap: 10px;
  padding-left: 80px;
  display: flex;
`;

const SecondValidButton = styled.div`
  left: 410px;
  top: 160px;
`;

const Title = styled.div`
  font-family: "나눔고딕", NanumGothic, "돋움", Dotum, Helvetica, sans-serif;
  height: 30px;
  margin: 10px 0 5px 0;
  font-size: 20px;
  font-weight: 700;
  color: white;
`;
