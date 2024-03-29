import { MapWithBars } from "@/components/Map/MapWithBars";
import { MarkerDataType } from "@/types";
import { useEffect, useState } from "react";

interface MapProps {
  pageProps: {
    name: "map";
  };
}

export default function Map({ pageProps }: MapProps) {
  // const [markers, setMarkers] = useState<MarkerDataType[]>([]);

  // // Fetch markers from API
  // // Temp solution for now, will be replaced with getStaticProps
  // useEffect(() => {
  //   async function getMarkers() {
  //     const markersData = await fetch("/api/marker/get-markers", {
  //       method: "GET",
  //     }).then((res) => res.json());
  //     setMarkers(markersData.markers);
  //   }
  //   getMarkers();
  // }, []);

  return (
    <>
      <MapWithBars />
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
