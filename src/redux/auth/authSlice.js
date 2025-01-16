import authService from "@/Services/authService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  user: null,
  isSuccess: false,
  isLoading: false,
  message: "",
  acceptrules: JSON.parse(localStorage.getItem("acceptrules"))?.acceptrules || false,
};

// Login User
export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      return await authService.login(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message)
    }
  }
);

// Get User
export const getUser = createAsyncThunk("auth/getUser", async (_, thunkAPI) => {
  try {
    return await authService.getUser();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || error.message)
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    RESET(state) {
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },
    ACCEPTRULES: (state) => {
      state.acceptrules = true;
      localStorage.setItem(
        "acceptrules",
        JSON.stringify({ acceptrules: true })
      );
    },
  },
  extraReducers: (builder) => {
    builder
      // Login User
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.user = action.payload;
        state.message = "Welcome  " + state.user.username;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
        //  toast.error(action.payload);
        // if (action.payload.includes("New browser")) {
        //   state.twoFactor = true;
        // }
      })

      // Get User
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.message = "Welcome  " + action.payload.username;
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        //  toast.error(action.payload);
      });
  },
});

export const { RESET, ACCEPTRULES } = authSlice.actions;
export default authSlice.reducer;
