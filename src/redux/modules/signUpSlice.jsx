import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const initialState = {
  isLoading: false,
  error: null,
};

export const __postSignUp = createAsyncThunk("signUp/postSignUp", async (payload, thunkAPI) => {
  try {
    await axios.post(`${API_URL}/member/signup`, payload);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.reponse.data);
  }
});

export const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {},
  extraReducers: {
    [__postSignUp.pending]: (state) => {
      state.isLoading = true;
    },
    [__postSignUp.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [__postSignUp.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = signUpSlice.actions;
export default signUpSlice.reducer;
