import { MapWithBars } from "@/components/Map/MapWithBars";
import { MarkerDataType } from "@/types";

export default function Map({ markers }: { markers: MarkerDataType[] }) {
  return (
    <>
      <MapWithBars markers={markers} />
    </>
  );
}

export async function getStaticProps() {
  console.warn("hello");
  const markersFetch = await fetch(
    "http://localhost:3000/" + "api/get-markers",
    {
      method: "GET",
    }
  );
  const data: { markers: MarkerDataType[] } = await markersFetch.json();
  const { markers } = data;
  console.log(markers);
  return {
    props: { markers },
  };
}
