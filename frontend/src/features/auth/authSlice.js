import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Get User from localStorage
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user || null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    reset: (state, action) => {
      state.isError = false;
      state.isLoading = false;
      state.message = "";
      state.isSuccess = false;
    },
    extraReducers: () => {},
  },
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
