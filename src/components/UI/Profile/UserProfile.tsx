import { MarkerDataType } from "@/types";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { MarkerInfo } from "./MarkerInfo";

export default function UserProfile() {
  const { data: session, status } = useSession();
  const [userMarkers, setUserMarkers] = useState<MarkerDataType[]>([]);
  useEffect(() => {
    async function getUserMarkers() {
      const params = new URLSearchParams({ email: session?.user!.email! });
      const markersData = await fetch(
        "/api/get-markers-for-profile?" + params,
        {
          method: "GET",
        }
      ).then((res) => res.json());
      setUserMarkers(markersData.markers);
    }
    getUserMarkers();
    console.log(userMarkers);
  }, [session?.user!.email!]);
  return (
    <div className="mt-2">
      {userMarkers.map((marker) => (
        <MarkerInfo marker={marker} />
      ))}
    </div>
  );
}
