import { MapWithBars } from "@/components/Map/MapWithBars";
import { getMarkers } from "@/lib/get-markers";
import { MarkerDataType } from "@/types";
import { useEffect, useState } from "react";

export default function Map() {
  const [markers, setMarkers] = useState<MarkerDataType[]>([]);

  // Fetch markers from API
  // Temp solution for now, will be replaced with getStaticProps
  useEffect(() => {
    async function getMarkers() {
      const markers = await fetch("/api/markers").then((res) => res.json());
      setMarkers(markers);
    }
    getMarkers();
  }, []);

  return (
    <>
      <MapWithBars />
    </>
  );
}

// export async function getStaticProps() {
//   const markers = await getMarkers();
//   return {
//     props: { markers },
//     revalidate: 1,
//   };
// }
