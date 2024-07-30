import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface MeetingMarker {
  latLang: [number, number];
  location: string;
  date: string;
  name: string;
}

interface MeetingMarkerState {
  data: MeetingMarker[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: MeetingMarkerState = {
  data: [],
  status: "idle",
  error: null,
};

export const getMeetings = createAsyncThunk(
  "meetingMarker/getMeetings",
  async () => {
    const response = await fetch("/api/meeting/get-meetings", {
      method: "GET",
    });
    const json = await response.json();

    return json.meetings;
  }
);

const meetingMarkerSlice = createSlice({
  name: "meetingMarker",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMeetings.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMeetings.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      })
      .addCase(getMeetings.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const {} = meetingMarkerSlice.actions;
export default meetingMarkerSlice.reducer;
