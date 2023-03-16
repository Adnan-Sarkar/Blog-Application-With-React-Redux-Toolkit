import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  sortBy: "",
  option: "",
};

// create slice
const filterSlcie = createSlice({
  name: "filter",
  initialState,
  reducers: {
    sortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    option: (state, action) => {
      state.option = action.payload;
    },
  },
});

export default filterSlcie.reducer;
export const { option, sortBy } = filterSlcie.actions;
