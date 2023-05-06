// create a component that will display the instagram grid

// import { Typography } from "@mui/material";

import React from "react";
import { IGImage } from "../IGImage";
import { Grid } from "@mui/material";

const images = [
  "https://www.instagram.com/p/Cq5jGEzIdxC",
  "https://www.instagram.com/p/Cq997Pmob45",
  "https://www.instagram.com/p/Cq99_rRIYLF",
  "https://www.instagram.com/p/Cq9-LSmo4q7",
];

export default function InstaGrid() {
  return (
    <div className="flex flex-wrap">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {images.map((image, id) => (
          <Grid key={id} item xs={6}>
            <IGImage key={id} src={image} alt="a" width={200} height={200} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
