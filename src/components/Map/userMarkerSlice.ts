import { Marker } from "./markerSlice";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface UserMarker extends Marker {}
interface MarkerPayload extends Marker {
  date: number;
  email: string | null | undefined;
  user: string | null | undefined;
}

export interface UserMarkerState {
  data: UserMarker;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | undefined;
}

const initialState: UserMarkerState = {
  data: {
    latLng: [0, 0],
    photoUrl: "",
    description: "",
    instagram: "",
    isUskEvent: false,
    location: "",
  },
  status: "idle",
  error: undefined,
};

export const addMarker = createAsyncThunk(
  "userMarker/addMarker",
  async (data: MarkerPayload) => {
    const response = await fetch("/api/marker/add-marker", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();

    return json;
  }
);

const userMarkerSlice = createSlice({
  name: "userMarker",
  initialState,
  reducers: {
    setUserMarker(state: UserMarkerState, action: PayloadAction<UserMarker>) {
      state.data = { ...state.data, ...action.payload };
    },
    setLatLng(state: UserMarkerState, action: PayloadAction<[number, number]>) {
      state.data.latLng = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addMarker.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addMarker.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(addMarker.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setUserMarker, setLatLng } = userMarkerSlice.actions;
export default userMarkerSlice.reducer;
