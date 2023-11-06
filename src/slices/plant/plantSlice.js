import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  plants: [],
  error: null,
  success: false,
};

const plantSlice = createSlice({
  name: "plant",
  initialState,
  reducers: {},
  extraReducers: {
    "plant/getAllPlants/pending": (state, action) => {
      state.loading = true;
    },
    "plant/getAllPlants/fulfilled": (state, action) => {
      state.loading = false;
      state.plants = action.payload;
      state.success = true;
    },
    "plant/getAllPlants/rejected": (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
    "plant/getPlantById/pending": (state, action) => {
      state.loading = true;
    },
    "plant/getPlantById/fulfilled": (state, action) => {
      state.loading = false;
      state.plants = action.payload;
      state.success = true;
    },
    "plant/getPlantById/rejected": (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
    "plant/createPlant/pending": (state, action) => {
      state.loading = true;
    },
    "plant/createPlant/fulfilled": (state, action) => {
      state.loading = false;
      state.plants = action.payload;
      state.success = true;
    },
    "plant/createPlant/rejected": (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

export default plantSlice.reducer;