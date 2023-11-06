import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth/authSlice";
import plantReducer from "./slices/plant/plantSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    plant: plantReducer,
  },
});

export default store;
