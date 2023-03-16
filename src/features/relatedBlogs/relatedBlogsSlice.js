import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getRelatedBlogs from "./relatedBlogsAPI";

// initial state
const initialState = {
  isLoading: false,
  isError: false,
  relatedBlogs: [],
  error: "",
};

// create thunk function
export const fetchRelatedBlogs = createAsyncThunk(
  "relatedBlogs/fetchRelatedBlogs",
  async ({ tags, id }) => {
    const blogs = await getRelatedBlogs({ tags, id });
    return blogs;
  }
);

// create slice
const relatedBlogsSlice = createSlice({
  name: "relatedBlogs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedBlogs.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.relatedBlogs = [];
        state.error = "";
      })
      .addCase(fetchRelatedBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.relatedBlogs = action.payload;
        state.error = "";
      })
      .addCase(fetchRelatedBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.relatedBlogs = [];
        state.error = action.error;
      });
  },
});

export default relatedBlogsSlice.reducer;
