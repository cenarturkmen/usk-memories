import { Box, Card, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";

export default function Participation() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <Card
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
          background: "#121212",
          margin: "3rem 0rem 3rem 0rem",
          padding: isMobile ? "2rem 1rem 2rem 1rem" : "2rem",
          borderRadius: "1rem",
          color: "white",
          opacity: "0.95",
        }}
      >
        {/* {!isMobile && (
          <div>
            <Image
              src="/images/Open Peeps - Bust.png"
              alt="logo"
              width={"215"}
              height={"250"}
            />
          </div>
        )} */}
        <div className="flex flex-col">
          <Typography variant="h4">Participation</Typography>
          <Typography variant="h6">
            The mission of Urban Sketchers Istanbul is to connect urban
            sketchers who want to draw Istanbul. Participating in Urban
            Sketchers Istanbul through events, workshops, Sketchcrawls and
            social media accounts are open to everyone. USK Istanbul doesn’t
            have a membership system. If you want to join one of our events, you
            can follow our social media accounts and pages.
          </Typography>
        </div>
      </Card>
    </>
  );
}
