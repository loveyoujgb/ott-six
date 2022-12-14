import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const API_MOVIES = process.env.REACT_APP_API_URL;

const initialState = {
  movies: [],
  isLoading: false,
  error: null,
  comments: [],
};

export const __getMovies = createAsyncThunk("movies/getMovies", async (payload, thunkAPI) => {
  try {
    const data = await axios.get(`${API_MOVIES}/board`);
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __postMovies = createAsyncThunk("movies/postMovies", async (payload, thunkAPI) => {
  try {
    const accessToken = cookies.get("Authorization");
    const data = await axios.post(`${API_MOVIES}/auth/board`, payload, {
      headers: {
        Authorization: accessToken,
      },
    });
    thunkAPI.dispatch(__getMovies());
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __putMovies = createAsyncThunk("movies/putMovies", async (payload, thunkAPI) => {
  try {
    const accessToken = cookies.get("Authorization");
    await axios.put(`${API_MOVIES}/auth/board/${payload.boardId}`, payload, {
      headers: {
        Authorization: accessToken,
      },
    });
    thunkAPI.dispatch(__getMovies());
    return thunkAPI.fulfillWithValue(payload);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __deleteMovies = createAsyncThunk("movies/deleteMovies", async (payload, thunkAPI) => {
  try {
    const accessToken = cookies.get("Authorization");
    const data = await axios.delete(`${API_MOVIES}/auth/board/${payload}`, {
      headers: {
        Authorization: accessToken,
      },
    });
    thunkAPI.dispatch(__getMovies());
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __getComments = createAsyncThunk("comments/getComments", async (payload, thunkAPI) => {
  try {
    const data = await axios.get(`${API_MOVIES}/comment/${payload}`);
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __postComment = createAsyncThunk("comments/postComment", async (payload, thunkAPI) => {
  try {
    const accessToken = cookies.get("Authorization");
    const data = await axios.post(`${API_MOVIES}/auth/comment/${payload.boardId}`, payload, {
      headers: {
        Authorization: accessToken,
      },
    });
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue("ERROR=>", error);
  }
});

export const __updateComment = createAsyncThunk("comments/updateComments", async (payload, thunkAPI) => {
  try {
    const accessToken = cookies.get("Authorization");
    await axios.put(`${API_MOVIES}/auth/comment/${payload.commentId}`, payload, {
      headers: {
        Authorization: accessToken,
      },
    });
    thunkAPI.dispatch(__getComments(payload.boardId));
    return thunkAPI.fulfillWithValue(payload);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __deleteComment = createAsyncThunk("comments/delteComments", async (payload, thunkAPI) => {
  try {
    const accessToken = cookies.get("Authorization");
    await axios.delete(`${API_MOVIES}/auth/comment/${payload}`, {
      headers: {
        Authorization: accessToken,
      },
    });
    return thunkAPI.fulfillWithValue(payload);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: {
    [__getMovies.pending]: (state) => {
      state.isLoading = true;
    },
    [__getMovies.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.movies = action.payload;
    },
    [__getMovies.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__postMovies.pending]: (state) => {
      state.isLoading = true;
    },
    [__postMovies.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.movies.push(action.payload);
    },
    [__postMovies.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__putMovies.pending]: (state) => {
      state.isLoading = true;
    },
    [__putMovies.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.movies = state.movies.map((movie) => {
        if (movie.boardId === action.payload.id) {
          return { ...movie, title: action.payload.title, content: action.payload.content };
        } else {
          return movie;
        }
      });
    },
    [__putMovies.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__deleteMovies.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteMovies.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.movies.filter((movie) => movie.id !== action.payload);
    },
    [__deleteMovies.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__getComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    },
    [__getComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__postComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__postComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments.push(action.payload);
    },
    [__postComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__updateComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateComment.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [__updateComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__deleteComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = state.comments.filter((v) => v.id !== action.payload);
    },
    [__deleteComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = moviesSlice.actions;
export default moviesSlice.reducer;
