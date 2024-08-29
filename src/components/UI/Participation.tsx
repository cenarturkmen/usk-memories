import { Typography, useMediaQuery } from "@mui/material";
import { ItemCard } from "./ItemCard";
import { IGImage } from "./IGImage";

export default function Participation() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <ItemCard
      // justify="center"
      // direction="column"
      // background="transparent"
      // shadow="none"
      // padding="0rem"
      >
        <div className={"flex ".concat(isMobile ? "flex-col" : "flex-row")}>
          <div>
            <IGImage
              src="https://www.instagram.com/p/Cxr1PFmoc7v/?img_index=1"
              alt="Urban Sketchers Istanbul"
              width={isMobile ? 365 : 350}
              height={isMobile ? 270 : 270}
            />
          </div>
          <div className={isMobile ? "pl-0" : "pl-8"}>
            <Typography
              variant="h2"
              sx={{ textAlign: isMobile ? "left" : "left" }}
            >
              Participation
            </Typography>
            <Typography variant="h5">
              The mission of Urban Sketchers Istanbul is to connect urban
              sketchers who want to draw Istanbul. Participating in Urban
              Sketchers Istanbul through events, workshops, Sketchcrawls and
              social media accounts are open to everyone. USK Istanbul doesn’t
              have a membership system. If you want to join one of our events,
              you can follow our social media accounts and pages.
            </Typography>
          </div>
        </div>
      </ItemCard>
    </>
  );
}
