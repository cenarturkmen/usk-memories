import { MarkerDataType } from "@/types";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { MarkerInfo } from "./MarkerInfo";
import { ProfileBar } from "./ProfileBar";

export default function UserProfile() {
  const { data: session, status } = useSession();
  const [userMarkers, setUserMarkers] = useState<MarkerDataType[]>([]);
  const [isSomeMarkerDeleted, setIsSomeMarkerDeleted] = useState(false);

  useEffect(() => {
    async function getUserMarkers() {
      const params = new URLSearchParams({ email: session?.user!.email! });
      const markersData = await fetch(
        "/api/marker/get-markers-for-profile?" + params,
        {
          method: "GET",
        }
      ).then((res) => res.json());
      setUserMarkers(markersData.markers);
    }
    getUserMarkers();
  }, [isSomeMarkerDeleted, session?.user]);

  const deleteMarker = async (markerID: string) => {
    const params = new URLSearchParams({ _id: markerID });
    const response = await fetch(`/api/marker/delete-marker-for-profile`, {
      method: "POST",
      body: params,
    });
    const data = await response.json();
    
    setIsSomeMarkerDeleted(!isSomeMarkerDeleted);
  };

  return (
    <div className="flex flex-col items-center">
      <ProfileBar />
      <div className="mt-2">
        {userMarkers.map((marker, index) => (
          <MarkerInfo key={index} marker={marker} deleteMarker={deleteMarker} />
        ))}
      </div>
    </div>
  );
}
