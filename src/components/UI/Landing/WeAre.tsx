import { Typography } from "@mui/material";
import React from "react";
import InstaGrid from "./InstaGrid";
import { ItemCard } from "../ItemCard";
import Logo from "../Logo";
import Link from "next/link";
import { Instagram } from "@mui/icons-material";

export default function WeAre() {
  return (
    <div>
      <ItemCard justify="center">
        <div className="flex flex-row">
          <div className="flex flex-col justify-center">
            <div className="flex flex-col justify-center">
              <Typography variant="h2">
                We are Urban Sketchers Istanbul
              </Typography>
              {/* <Link
                href={"https://www.instagram.com/urbansketchersistanbul/"}
                target="_blank"
              >
                <div className="flex flex-row hover:text-blue-900">
                  <Instagram sx={{ marginTop: "5px" }} />
                  <Typography variant="h5" sx={{ marginLeft: "5px" }}>
                    @urbansketchersistanbul
                  </Typography>
                </div>
              </Link> */}
            </div>
            {/* <div>
              <InstaGrid />
            </div> */}
          </div>
        </div>
      </ItemCard>
    </div>
  );
}
