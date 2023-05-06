import UserProfile from "@/components/UI/Profile/UserProfile";
import { MarkerDataType } from "@/types";
import { Container } from "@mui/material";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

function Profile() {
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
  }, [session?.user, userMarkers]);

  if (status === "loading") {
    return <>loading</>;
  }

  if (status === "unauthenticated") {
    return (
      <>
        <p>unauthenticated</p>
        {setTimeout(() => {
          window.location.href = "/";
        }, 1000)}
      </>
    );
  }

  return (
    <>
      <Container maxWidth="xl">
        <UserProfile />
      </Container>
    </>
  );
}

export default Profile;
