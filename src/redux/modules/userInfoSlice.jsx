import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const initialState = {
  isLoading: false,
  error: null,
};

export const __postUserInfo = createAsyncThunk("userInfo/postuserInfo", async (payload, thunkAPI) => {
  try {
    console.log(payload);
    const data = await axios.post(`${API_URL}/member/signup`, payload);
    console.log(data);
    // return thunkAPI.fulfillWithValue(payload);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.reponse.data);
  }
});

export const __userCheck = createAsyncThunk("Login/getUser", async (payload, thunkAPI) => {
  try {
    console.log(payload);
    const data = await axios.post(`${API_URL}/member/validate`, payload);
    console.log(data.data);
    return data.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.reponse.data);
  }
});

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {},
  extraReducers: {
    [__postUserInfo.pending]: (state) => {
      state.isLoading = true;
    },
    [__postUserInfo.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [__postUserInfo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__userCheck.pending]: (state) => {
      state.isLoading = true;
    },
    [__userCheck.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
      state.userCheck = state.userCheck.push(action.payload);
    },
    [__userCheck.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = userInfoSlice.actions;
export default userInfoSlice.reducer;
