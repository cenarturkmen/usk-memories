import MapMarkerProvider from "@/context/MapMarkerContext";
import dynamic from "next/dynamic";
import { useState } from "react";
import Form from "./Form";

const LeafletMapDynamic = dynamic(() => import("@/components/Map"), {
  ssr: false,
});

export function MapWithBars() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <MapMarkerProvider>
        <div className="flex">
          <LeafletMapDynamic
            addMarker={() => setShowForm(true)}
            showForm={showForm}
          />
          {showForm && <Form setShowForm={setShowForm} />}
        </div>
      </MapMarkerProvider>
    </>
  );
}
