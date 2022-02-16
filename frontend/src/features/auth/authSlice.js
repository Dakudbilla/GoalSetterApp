import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

//Get User from localStorage
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user || null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//Register User
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (err) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Auth slice
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
    extraReducers: (builder) => {
      builder
        .addCase(register.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(register.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.user = action.payload;
        })
        .addCase(register.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
          state.user = null;
        });
    },
  },
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
