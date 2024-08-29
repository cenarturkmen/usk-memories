import { Box, Card, Typography, useMediaQuery } from "@mui/material";
import { ItemCard } from "../ItemCard";

const Manifesto = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <ItemCard
        justify="center"
        direction="column"
        background="transparent"
        shadow="none"
        padding="0rem"
      >
        <div className="flex flex-col">
          <Typography
            variant="h1"
            sx={{ textAlign: isMobile ? "left" : "center" }}
          >
            Manifesto
          </Typography>
          <Typography
            variant="h5"
            sx={{ textAlign: isMobile ? "center" : "center" }}
          >
            1. We draw on location, indoors or out, capturing what we see from
            direct observation.
          </Typography>
          <Typography
            variant="h5"
            sx={{ textAlign: isMobile ? "center" : "center" }}
          >
            2. Our drawings tell the story of our surroundings, the places we
            live and where we travel.
          </Typography>
          <Typography
            variant="h5"
            sx={{ textAlign: isMobile ? "center" : "center" }}
          >
            3. Our drawings are a record of time and place.
          </Typography>
          <Typography
            variant="h5"
            sx={{ textAlign: isMobile ? "center" : "center" }}
          >
            4. We are truthful to the scenes we witness.
          </Typography>
          <Typography
            variant="h5"
            sx={{ textAlign: isMobile ? "center" : "center" }}
          >
            5. We use any kind of media and cherish our individual styles.
          </Typography>
          <Typography
            variant="h5"
            sx={{ textAlign: isMobile ? "center" : "center" }}
          >
            6. We support each other and draw together.
          </Typography>
          <Typography
            variant="h5"
            sx={{ textAlign: isMobile ? "center" : "center" }}
          >
            7. We share our drawings online.
          </Typography>
          <Typography
            variant="h5"
            sx={{ textAlign: isMobile ? "center" : "center" }}
          >
            8. We show the world, one drawing at a time.
          </Typography>
        </div>
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
      </ItemCard>
    </>
  );
};
export default Manifesto;
