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
      const newPlant = action.payload;
      state.plants = [...state.plants, newPlant];
      state.success = true;
    },
    "plant/createPlant/rejected": (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
    "plant/likePlant/pending": (state, action) => {
      state.loading = true;
    },
    "plant/likePlant/fulfilled": (state, action) => {
      state.loading = false;
      const likedPlant = action.payload;
      state.plants = state.plants.map((plant) => {
        if (plant._id === likedPlant._id) {
          return {
            ...plant,
            like: likedPlant.like,
          };
        }
        return plant;
      });
      state.success = true;
    },
    "plant/likePlant/rejected": (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
    "plant/toggleBarterPlant/pending": (state, action) => {
      state.loading = true;
    },
    "plant/toggleBarterPlant/fulfilled": (state, action) => {
      state.loading = false;
      const toggledPlant = action.payload;
      state.plants = state.plants.map((plant) => {
        if (plant._id === toggledPlant._id) {
          return {
            ...plant,
            toBarter: toggledPlant.toBarter,
          };
        }
        return plant;
      });
      state.success = true;
    },
    "plant/toggleBarterPlant/rejected": (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
    "plant/editPlant/pending": (state, action) => {
      state.loading = true;
    },
    "plant/editPlant/fulfilled": (state, action) => {
      state.loading = false;
      const editedPlant = action.payload;
      state.plants = state.plants.map((plant) => {
        if (plant._id === editedPlant._id) {
          return {
            ...plant,
            ...editedPlant,
          };
        }
        return plant;
      });
      state.success = true;
    },
    "plant/editPlant/rejected": (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
    "plant/deletePlant/pending": (state, action) => {
      state.loading = true;
    },
    "plant/deletePlant/fulfilled": (state, action) => {
      state.loading = false;
      const deletedPlant = action.payload;
      state.plants = state.plants.filter(
        (plant) => plant._id !== deletedPlant._id
      );
      state.success = true;
    },
    "plant/deletePlant/rejected": (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

export default plantSlice.reducer;
