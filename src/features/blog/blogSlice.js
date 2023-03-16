import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getBlog from "./blogAPI";

// initial state
const initialState = {
  isLoading: false,
  isError: false,
  blog: {},
  error: "",
};

// create thunk function
export const fetchBlog = createAsyncThunk(
  "blog/fetchBlog",
  async ({ id, totalLikes, isSaved, toggleSaved }) => {
    const blog = await getBlog({ id, totalLikes, isSaved, toggleSaved });
    return blog;
  }
);

// create slice
const blogsSlice = createSlice({
  name: "blog",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlog.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.blog = {};
        state.error = "";
      })
      .addCase(fetchBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.blog = action.payload;
        state.error = "";
      })
      .addCase(fetchBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.blog = {};
        state.error = action.error;
      });
  },
});

export default blogsSlice.reducer;
