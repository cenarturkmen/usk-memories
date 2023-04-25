import { MarkerDataType } from "@/types";

export async function getMarkers() {
  const markersFetch = await fetch("http://0.0.0.0:3000/api/get-markers", {
    method: "GET",
  });
  const data: { markers: MarkerDataType[] } = await markersFetch.json();
  const { markers } = data;

  return markers;
}
