import { MapMarkerProvider } from "@/context/MapMarkerContext";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import Form from "./Form";
import { MapFormDataType, MarkerDataType } from "@/types";
import DataBar from "@/components/Map/DataBar";
import { useSession } from "next-auth/react";

const LeafletMapDynamic = dynamic(() => import("@/components/Map"), {
  ssr: false,
});

interface MapWithBarsProps {
  markers: MarkerDataType[];
}

export function MapWithBars({ markers }: MapWithBarsProps) {
  const [showForm, setShowForm] = useState(false);
  const [rightBarData, setRightBarData] = useState<MapFormDataType>();
  const [showRightBar, setShowRightBar] = useState(false);

  return (
    <>
      <MapMarkerProvider>
        <div className="flex">
          <LeafletMapDynamic
            addMarker={() => setShowForm(true)}
            showForm={showForm}
            data={markers!}
            setRightBarData={setRightBarData}
            setShowRightBar={setShowRightBar}
          />
          {rightBarData && showRightBar && (
            <DataBar
              instagram={rightBarData.instagram}
              isUskEvent={rightBarData.isUskEvent}
              location={rightBarData.location}
              photoUrl={rightBarData.photoUrl}
              description={rightBarData.description}
              latLng={rightBarData.latLng as [number, number]}
              setShowDataBar={setShowRightBar}
            />
          )}
          {showForm && <Form setShowForm={setShowForm} />}
        </div>
      </MapMarkerProvider>
    </>
  );
}
