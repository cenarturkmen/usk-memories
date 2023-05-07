import { Typography } from "@mui/material";
import { ItemCard } from "../ItemCard";
import Image from "next/image";
import Link from "next/link";
import { Instagram } from "@mui/icons-material";
import InstaGrid from "./InstaGrid";
export default function WhoAreWe() {
  return (
    <div className="mx-1">
      <ItemCard>
        <div className="flex flex-col mt-3">
          <div className="flex flex-row ml-4">
            <Image
              src="/images/landing-2.png"
              alt="logo"
              width={"250"}
              height={"250"}
            />
            <div className="flex-row ml-10">
              <Typography variant="h2">Who are we?</Typography>
              <Typography variant="h5">
                We are a group of Istanbul residents who enjoy sketching.{" "}
              </Typography>
              <Typography variant="h5">
                Through social media, we became aware of each other’s existence
                and began to take sketch walks together in Istanbul.
              </Typography>
              <Typography variant="h5">
                Our small group consists of students and workers. On weekends,
                we visit museums for sketching and walk around the city.
              </Typography>
              <Typography variant="h5">
                And of course, we discuss sketches, pens, paints, and papers
                extensively!
              </Typography>
              <Link
                href={"https://www.instagram.com/urbansketchersistanbul/"}
                target="_blank"
              >
                <div className="flex flex-row hover:text-blue-900">
                  <Instagram sx={{ marginTop: "5px" }} />
                  <Typography variant="h5" sx={{ marginLeft: "5px" }}>
                    @urbansketchersistanbul
                  </Typography>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </ItemCard>
    </div>
  );
}
