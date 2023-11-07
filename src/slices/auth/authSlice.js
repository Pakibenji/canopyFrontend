import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  userInfo: {},
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    checkUserInLocalStorage: (state, action) => {
      const userFromLocalStorage = JSON.parse(localStorage.getItem("user"));
      return {
        ...state,
        userInfo: userFromLocalStorage,
      };
    },
  },
  extraReducers: {
    "auth/register/pending": (state, action) => {
      state.loading = true;
    },
    "auth/register/fulfilled": (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
      state.success = true;
    },
    "auth/register/rejected": (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
    "auth/login/pending": (state, action) => {
      state.loading = true;
    },
    "auth/login/fulfilled": (state, action) => {
      state.loading = false;
      state.userInfo.userId = action.payload.userId
      state.userInfo.userEmail = action.payload.userEmail
      state.userInfo.userDisplayName = action.payload.userDisplayName
      state.success = true;
    },
    "auth/login/rejected": (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
    "auth/logout/pending": (state, action) => {
      state.loading = true;
    },
    "auth/logout/fulfilled": (state, action) => {
      state.loading = false;
      state.userInfo = {};
      state.success = true;
    },
    "auth/logout/rejected": (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

export default authSlice.reducer;
