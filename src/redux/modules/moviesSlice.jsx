import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// const API_MOVIES = process.env.REACT_APP_MOVIES_API_URL;

const initialState = {
  movies: [],
  isLoading: false,
  error: null,
  comments: [],
};

export const __getMovies = createAsyncThunk("movies/getmovies", async (payload, thunkAPI) => {
  try {
    const data = await axios.get("http://localhost:3000/data/response.json");
    console.log(data.data);
    // return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

// export const __deletemovies = createAsyncThunk("movies/deletemovies", async (payload, thunkAPI) => {
//   try {
//     const data = await axios.delete(`${API_movies}/${payload}`);
//     thunkAPI.dispatch(__getTodos());
//     return thunkAPI.fulfillWithValue(data.data);
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error);
//   }
// });

// export const __postmovies = createAsyncThunk("movies/postmovies", async (payload, thunkAPI) => {
//   try {
//     const data = await axios.post(`${API_TODOS}`, payload);
//     return thunkAPI.fulfillWithValue(data.data);
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error);
//   }
// });

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: {
    // [__getmovies.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [__getmovies.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.movies = action.payload;
    // },
    // [__getmovies.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
});

export const {} = moviesSlice.actions;
export default moviesSlice.reducer;
