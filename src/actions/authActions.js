import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "@firebase/auth";
import { auth } from "../config/firebase";

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ email, password, displayName }, thunkAPI) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await sendEmailVerification(user);
      await updateProfile(user, {
        displayName: displayName,
      });
      const userEmail = user.email;
      const userId = user.uid;
      const userDisplayName = user.providerData[0].displayName;
      localStorage.setItem(
        "user",
        JSON.stringify({ userEmail, userId, userDisplayName })
      );
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const userEmail = user.email;
      const userId = user.uid;
      const userDisplayName = user.providerData[0].displayName;
      localStorage.setItem(
        "user",
        JSON.stringify({ userEmail, userId, userDisplayName })
      );
      return { userEmail, userId, userDisplayName };
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const logoutUser = createAsyncThunk("auth/logout", async () => {
  try {
    await signOut(auth);
    localStorage.removeItem("user");
  } catch (error) {
    console.log(error);
  }
});

export const checkUserInLocalStorage = createAction(
  "auth/checkUserInLocalStorage",
  () => {
    const userFromLocalStorage = JSON.parse(localStorage.getItem("user"));
    return {
      payload: userFromLocalStorage,
    };
  }
);
