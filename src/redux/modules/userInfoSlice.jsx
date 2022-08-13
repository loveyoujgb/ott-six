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
    console.log(data.data);
    // return thunkAPI.fulfillWithValue(data.data);
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

export const __postuserInfo = createAsyncThunk("userInfo/postuserInfo", async (payload, thunkAPI) => {
  try {
    const data = await axios.post("http://localhost:3000/data/userInfo.json");
    return thunkAPI.fulfillWithValue(data.data);
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
      state.userInfo = action.payload;
    },
    [__getUserInfo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = userInfoSlice.actions;
export default userInfoSlice.reducer;
