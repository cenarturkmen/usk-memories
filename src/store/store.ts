import { configureStore } from "@reduxjs/toolkit";
import MarkerReducer from "../components/Map/markerSlice";
import UserMarkerReducer from "../components/Map/userMarkerSlice";

export const store = configureStore({
  reducer: {
    marker: MarkerReducer,
    userMarker: UserMarkerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
