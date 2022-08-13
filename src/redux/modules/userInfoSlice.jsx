import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// const API_userInfo = process.env.REACT_APP_userInfo_API_URL;

const initialState = {
  userInfo: [],
  isLoading: false,
  error: null,
  comments: [],
};

export const __getUserInfo = createAsyncThunk("userInfo/getuserInfo", async (payload, thunkAPI) => {
  try {
    const data = await axios.get("http://localhost:3000/data/userInfo.json");
    // console.log(data.data);
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

// export const __deleteuserInfo = createAsyncThunk("userInfo/deleteuserInfo", async (payload, thunkAPI) => {
//   try {
//     const data = await axios.delete(`${API_userInfo}/${payload}`);
//     thunkAPI.dispatch(__getTodos());
//     return thunkAPI.fulfillWithValue(data.data);
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error);
//   }
// });

export const __postUserInfo = createAsyncThunk("userInfo/postuserInfo", async (payload, thunkAPI) => {
  try {
    console.log(payload);
    const data = await axios.post("http://localhost:3000/data/userInfo.json", payload);
    console.log(data.data);
    return thunkAPI.fulfillWithValue(payload);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {},
  extraReducers: {
    [__getUserInfo.pending]: (state) => {
      state.isLoading = true;
    },
    [__getUserInfo.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
      state.userInfo = action.payload;
    },
    [__getUserInfo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__postUserInfo.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__postUserInfo.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.userInfo.push(action.payload); // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__postUserInfo.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});

export const {} = userInfoSlice.actions;
export default userInfoSlice.reducer;
