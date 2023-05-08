import { Typography } from "@mui/material";
import { ItemCard } from "../ItemCard";
import Link from "next/link";
import { Instagram } from "@mui/icons-material";
import { IGImage } from "../IGImage";
import { useMediaQuery } from "@mui/material";

export default function WhoAreWe() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div>
      <ItemCard justify="flex-start">
        {!isMobile && (
          <IGImage
            src="https://www.instagram.com/p/Cq99_rRIYLF/"
            alt="Urban Sketchers Istanbul"
            width={230}
            height={230}
          />
        )}
        <div className={"flex flex-col ".concat(isMobile ? "" : " ml-10")}>
          <Typography variant="h2">Who are we?</Typography>
          <Typography variant="h6">
            We are a group of Istanbul residents who enjoy sketching.{" "}
          </Typography>
          <Typography variant="body1">
            Through social media, we became aware of each other’s existence and
            began to take sketch walks together in Istanbul.
          </Typography>
          <Typography variant="body1">
            Our small group consists of students and workers. On weekends, we
            visit museums for sketching and walk around the city.
          </Typography>
          <Typography variant="body1">
            And of course, we discuss sketches, pens, paints, and papers
            extensively!
          </Typography>
          <Link
            href={"https://www.instagram.com/urbansketchersistanbul/"}
            target="_blank"
          >
            <div className="flex flex-row hover:text-blue-900 mt-8">
              <Instagram />
              <Typography variant="body1" sx={{ marginLeft: "5px" }}>
                @urbansketchersistanbul
              </Typography>
            </div>
          </Link>
        </div>
      </ItemCard>
    </div>
  );
}
