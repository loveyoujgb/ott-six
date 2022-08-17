import styled from "styled-components";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { __loginCheck } from "../redux/modules/loginSlice";
import Button from "./elements/Button";
import Input from "./elements/Input";
import axios from "axios";
import { getTokenCookie } from "../actions/Cookie";
import { useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (getTokenCookie()) {
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
  const [isusername, setIsusername] = useState(false);
  const [isnickname, setIsnickname] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  const postSignUp = async () => {
    try {
      await axios.post(`${API_URL}/member/signup`, {
        username: username,
        nickname: nickname,
        password: password,
        validPassword: validPassword,
      });
      alert("회원가입이 완료되었습니다.");
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
    setusername("");
    setnickname("");
    setPassword("");
    setValidPassword("");
  };

  //아이디(username) 중복확인
  const usernameCheck = async () => {
    const data = await axios.post(`${API_URL}/member/validateId`, { username: username });
    if (!data.data) {
      alert("이미 가입한 아이디입니다.");
    } else {
      alert("가입 가능합니다");
    }
  };

  const onClickusernameCheck = () => {
    usernameCheck({ username: username });
  };

  //닉네임 중복확인

  const nicknameCheck = async () => {
    const data = await axios.post(`${API_URL}/member/validateNickname`, { nickname: nickname });
    if (!data.data) {
      alert("이미 가입한 아이디입니다.");
    } else {
      alert("가입 가능합니다");
    }
  };

  const onClickunicknameCheck = () => {
    nicknameCheck({ nickname: nickname });
  };
  //아이디
  const onChangeusername = useCallback((e) => {
    const emailCurrent = e.target.value;
    setusername(emailCurrent);
    const emailRegex = /^[a-zA-Z](?=.{0,28}[0-9])[0-9a-zA-Z]{4,15}$/;
    //6자리 이상, 영문 대소문자 가능
    if (!emailRegex.test(emailCurrent)) {
      setusernameMessage("6~15자의 영문 대 소문자, 숫자를 입력해주세요.");
      setIsusername(false);
    } else {
      setusernameMessage("올바른 아이디 형식입니다 :)");
      setIsusername(true);
    }
  }, []);

  // 닉네임
  const onChangenickname = useCallback((e) => {
    const emailCurrent = e.target.value;
    setnickname(emailCurrent);
    const emailRegex = /^([a-zA-Z0-9가-힣]){3,10}$/;
    if (!emailRegex.test(emailCurrent)) {
      setnicknameMessage("3~10자의 영문 대 소문자, 숫자, 한글을 입력해주세요.");
      setIsnickname(false);
    } else {
      setnicknameMessage("올바른 닉네임 형식입니다 : )");
      setIsnickname(true);
    }
  }, []);

  // 비밀번호
  const onChangePassword = useCallback((e) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);
    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage("숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!");
      setIsPassword(false);
    } else {
      setPasswordMessage("안전한 비밀번호입니다 : )");
      setIsPassword(true);
    }
  }, []);

  // 비밀번호 확인
  const onChangeValidPassword = useCallback(
    (e) => {
      const passwordConfirmCurrent = e.target.value;
      setValidPassword(passwordConfirmCurrent);
      if (password === passwordConfirmCurrent) {
        setValidPasswordMessage("비밀번호를 똑같이 입력했어요 : )");
        setIsValidPassword(true);
      } else {
        setValidPasswordMessage("비밀번호가 불일치합니다. 다시 입력해주세요.");
        setIsValidPassword(false);
      }
    },
    [password]
  );

  return (
    <Whole>
      <LoginContainer onSubmit={onCreate}>
        <Footer>
          <Title>회원가입</Title>
          {/* 아이디 */}
          <Input name="username" onChange={onChangeusername} value={username} placeholder="아이디" type="text" inputType="basic"></Input>
          <FirstValidButton>
            <Button onClick={onClickusernameCheck} widthSize="70" type="button" btntype="blue">
              중복확인
            </Button>
          </FirstValidButton>
          {username.length > 0 && <span className={`message ${isusername ? "success" : "error"}`}>{usernameMessage}</span>}
          {/* 닉네임 */}
          <Input name="nickname" onChange={onChangenickname} value={nickname} placeholder="닉네임" type="text" inputType="basic"></Input>
          {nickname.length > 0 && <span className={`message ${isnickname ? "success" : "error"}`}>{nicknameMessage}</span>}
          <SecondValidButton>
            <Button onClick={onClickunicknameCheck} widthSize="70" type="button" btntype="blue">
              중복확인
            </Button>
          </SecondValidButton>
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
          <Button widthSize="360" type="submit" disabled={!(isusername && isnickname && isPassword && isValidPassword)} btntype="blue">
            회원가입
          </Button>
        </Footer>
      </LoginContainer>
    </Whole>
  );
};
export default SignUp;

const Whole = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: black;
`;

const LoginContainer = styled.form`
  color: white;
  display: flex;
  gap: 5px;
  position: relative;
  padding: 70px;
  background-color: #181818;
`;

const FirstValidButton = styled.div`
  left: 410px;
  top: 80px;
  position: absolute;
`;

const SecondValidButton = styled.div`
  left: 410px;
  top: 160px;
  position: absolute;
`;

const Title = styled.div`
  height: 50px;
  margin-bottom: 20px;
  font-size: xx-large;
  font-weight: 700;
  color: white;
`;

const Footer = styled.div`
  display: flex;
  width: 430px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 10px;
  background-color: #181818;
`;
