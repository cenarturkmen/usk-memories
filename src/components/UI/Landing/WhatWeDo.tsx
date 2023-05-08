import React from "react";
import { ItemCard } from "../ItemCard";
import { Typography } from "@mui/material";
import { IGImage } from "../IGImage";
import { useMediaQuery } from "@mui/material";

export default function WhatWeDo() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div>
      <ItemCard direction={isMobile ? "column" : "row"}>
        <div className={"flex flex-col ".concat(isMobile ? "" : " mr-10")}>
          <Typography variant="h3">What we do? </Typography>
          <Typography variant="h6">
            We are a group of people who love to sketch on location.
          </Typography>
          <Typography variant="body1">
            Our community is made up of people from all walks of life who come
            together to document the world around us through art. We believe
            that urban sketching is a powerful tool for storytelling and that it
            can help people connect with their surroundings in a more meaningful
            way. As part of the global Urban Sketchers community, we are
            committed to promoting the practice of urban sketching and sharing
            our work with others. We are a non-profit organization and we don’t
            have any political or religious affiliations.
          </Typography>
        </div>
        {!isMobile && (
          <IGImage
            src="https://www.instagram.com/p/Cq13Yalojpr/"
            alt="Urban Sketchers Istanbul"
            width={200}
            height={200}
          />
        )}
      </ItemCard>
    </div>
  );
}
