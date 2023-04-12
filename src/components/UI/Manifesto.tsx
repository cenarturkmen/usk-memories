import { Box, Card, Typography } from "@mui/material";

const Manifesto = () => {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
          background: "#121212",
          margin: "3rem 0rem 3rem 0rem",
          padding: "3rem 0rem 2rem 0rem",
          borderRadius: "1rem",
          color: "white",
          opacity: "0.95",
        }}
      >
        <div className="flex flex-col">
          <Typography variant="h3">Manifesto</Typography>
          <Typography variant="h6">
            1. We draw on location, indoors or out, capturing what we see from
            direct observation.
          </Typography>
          <Typography variant="h6">
            2. Our drawings tell the story of our surroundings, the places we
            live and where we travel.
          </Typography>
          <Typography variant="h6">
            3. Our drawings are a record of time and place.
          </Typography>
          <Typography variant="h6">
            4. We are truthful to the scenes we witness.
          </Typography>
          <Typography variant="h6">
            5. We use any kind of media and cherish our individual styles.
          </Typography>
          <Typography variant="h6">
            6. We support each other and draw together.
          </Typography>
          <Typography variant="h6">
            7. We share our drawings online.
          </Typography>
          <Typography variant="h6">
            8. We show the world, one drawing at a time.
          </Typography>
        </div>
        <div>
          <img
            src="/images/Open Peeps - Bust.png"
            alt="logo"
            width={"250"}
            height={"250"}
          />
        </div>
      </Card>
    </>
  );
};
export default Manifesto;
