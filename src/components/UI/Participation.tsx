import { Box, Typography, useMediaQuery } from "@mui/material";
import { ItemCard } from "./ItemCard";

export default function Participation() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <ItemCard>
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
      </ItemCard>
    </>
  );
}
