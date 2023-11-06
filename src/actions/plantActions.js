import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllPlants = createAsyncThunk(
  "plant/getAllPlants",
  async (thunkAPI) => {
    try {
      const response = await fetch("http://localhost:5000/plants");
      const plants = await response.json();
      return plants;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const getPlantById = createAsyncThunk(
  "plant/getPlantById",
  async (id, thunkAPI) => {
    try {
      const response = await fetch(`http://localhost:5000/plants/${id}`);
      const plant = await response.json();
      return [plant];
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const createPlant = createAsyncThunk(
  "plant/createPlant",
  async (plant, thunkAPI) => {
    try {
      const response = await fetch("http://localhost:5000/plants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(plant),
      });
      const newPlant = await response.json();
      return newPlant;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
