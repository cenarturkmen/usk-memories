// create a slice for the map markers

import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { get } from "http";

export interface Marker {
  latLng: [number, number];
  instagram: string;
  isUskEvent: boolean;
  location: string;
  photoUrl: string;
  description: string;
}

interface MarkerState {
  data: Marker[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: MarkerState = {
  data: [],
  status: "idle",
  error: null,
};

export const getMarkersInCordinates = createAsyncThunk(
  "markers/getMarkersInCordinates",
  async (params: URLSearchParams) => {
    const markersData = await fetch(
      `/api/marker/get-markers-in-cordinates?${params}`,
      {
        method: "GET",
      }
    );
    const markers = await markersData.json();

    return markers.markers;
  }
);

const markerSlice = createSlice({
  name: "marker",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMarkersInCordinates.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMarkersInCordinates.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      })
      .addCase(getMarkersInCordinates.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const {} = markerSlice.actions;
export default markerSlice.reducer;
