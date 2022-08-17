import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { connect } from "react-redux";
import { setRefreshTokenToCookie, getAccessToken } from "../../actions/Cookie";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const API_URL = process.env.REACT_APP_API_URL;

const initialState = {
  username: "",
  token: null,
  isLoading: false,
  error: null,
  comments: [],
};

export const __loginCheck = createAsyncThunk("Login/getLogin", async (payload, thunkAPI) => {
  try {
    const accessToken = cookies.get("Authorization");
    console.log(accessToken);
    const data = await axios.post(`${API_URL}/member/nickname`,{
      headers: {
        Authorization: accessToken,
      },
    });
    console.log(data);
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __getUser = createAsyncThunk("Login/getUser", async (payload, thunkAPI) => {
  try {
    console.log(payload);
    const data = await axios.get(`${API_URL}/test`);
    console.log(data);
    // setAuthorizationToken(token);
    // return thunkAPI.fulfillWithValue(data.headers.authorization);
  } catch (error) {
    console.log(error.responce);
    // return thunkAPI.rejectWithValue(error.responce.data);
  }
});

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: {
    [__loginCheck.pending]: (state) => {
      state.isLoading = true;
    },
    [__loginCheck.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
      state.name = action.payload;
      state.token = true;
    },
    [__loginCheck.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getUser.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getUser.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
    },
    [__getUser.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});

export const {} = loginSlice.actions;
export default loginSlice.reducer;
