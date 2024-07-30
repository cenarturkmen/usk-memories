import { configureStore } from "@reduxjs/toolkit";
import MarkerReducer from "./slices/markerSlice";
import UserMarkerReducer from "./slices/userMarkerSlice";
import meetingMarkerReducer from "./slices/meetingMarkerSlice";

export const store = configureStore({
  reducer: {
    marker: MarkerReducer,
    userMarker: UserMarkerReducer,
    meetingMarker: meetingMarkerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
