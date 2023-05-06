import React from "react";
import { ItemCard } from "../ItemCard";
import { Typography } from "@mui/material";
import Image from "next/image";

export default function WhatWeDo() {
  return (
    <div className="mx-1">
      <ItemCard>
        <div className="flex flex-col mr-24">
          <Typography variant="h3">What we do?</Typography>
          <Typography variant="h5">
            We are a group of people who love to sketch on location. We are not
            professional artists, but we love to sketch and we love to share our
            sketches with others. We are a part of the global Urban Sketchers
            community. We are a non-profit organization and we don’t have any
            political or religious affiliations.
          </Typography>
        </div>
        <Image
          src="/images/landing-1-removebg-preview.png"
          alt="logo"
          width={"250"}
          height={"250"}
        />
      </ItemCard>
    </div>
  );
}
