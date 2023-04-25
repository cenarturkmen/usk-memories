import { MapWithBars } from "@/components/Map/MapWithBars";
import { MarkerDataType } from "@/types";
import { useEffect, useState } from "react";

export default function Map() {
  const [markers, setMarkers] = useState<MarkerDataType[]>([]);

  // Fetch markers from API
  // Temp solution for now, will be replaced with getStaticProps
  useEffect(() => {
    async function getMarkers() {
      const markersData = await fetch("/api/get-markers").then((res) =>
        res.json()
      );
      setMarkers(markersData.markers);
    }
    getMarkers();
  }, []);

  return (
    <>
      <MapWithBars markers={markers} />
    </>
  );
}

// export async function getStaticProps() {
//   console.warn("hello");
//   const markersFetch = await fetch(
//     "http://localhost:3000/" + "api/get-markers",
//     {
//       method: "GET",
//     }
//   );
//   const data: { markers: MarkerDataType[] } = await markersFetch.json();
//   const { markers } = data;
//   console.log(markers);
//   return {
//     props: { markers },
//   };
// }
