import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getBlogs from "./blogsAPI";

// initial state
const initialState = {
  isLoading: false,
  isError: false,
  blogs: [],
  error: "",
};

// create thunk function
export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  const blogs = await getBlogs();
  return blogs;
});

// create slice
const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.blogs = [];
        state.error = "";
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.blogs = action.payload;
        state.error = "";
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.blogs = [];
        state.error = action.error;
      });
  },
});

export default blogsSlice.reducer;
