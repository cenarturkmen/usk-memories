import { MapMarkerProvider } from "@/context/MapMarkerContext";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import Form from "./Form";
import { MapDataType } from "@/types";
import { points } from "./MockData";
import DataBar from "@/components/Map/DataBar";
import getData from "@/firebase/getData";

const LeafletMapDynamic = dynamic(() => import("@/components/Map"), {
  ssr: false,
});

export function MapWithBars() {
  const [showForm, setShowForm] = useState(false);
  const [markerData, setMarkerData] = useState<MapDataType[]>();
  const [rightBarData, setRightBarData] = useState<MapDataType>();
  const [showRightBar, setShowRightBar] = useState(false);

  useEffect(() => {
    async function _getData() {
      try {
        getData().then((res) => {
          setMarkerData(res);
        });
      } catch (error) {
        console.error(error);
      }
    }

    _getData();
  }, []);

  return (
    <>
      <MapMarkerProvider>
        <div className="flex">
          <LeafletMapDynamic
            addMarker={() => setShowForm(true)}
            showForm={showForm}
            data={markerData!}
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
