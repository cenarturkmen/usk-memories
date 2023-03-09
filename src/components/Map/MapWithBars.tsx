import MapMarkerProvider from "@/context/MapMarkerContext";
import dynamic from "next/dynamic";
import Form from "./Form";

const LeafletMapDynamic = dynamic(() => import("@/components/Map"), {
  ssr: false,
});

export function MapWithBars() {
  return (
    <>
      <MapMarkerProvider>
        <div className="flex">
          <LeafletMapDynamic />
          <Form />
        </div>
      </MapMarkerProvider>
    </>
  );
}
