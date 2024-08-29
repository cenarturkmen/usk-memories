import { Typography } from "@mui/material";
import { ItemCard } from "../ItemCard";
import Link from "next/link";
import { Instagram } from "@mui/icons-material";
import { IGImage } from "../IGImage";
import { useMediaQuery } from "@mui/material";

export default function WhoAreWe() {
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
        <div className={"flex ".concat(isMobile ? "flex-col" : "flex-row")}>
          <div>
            <IGImage
              src="https://www.instagram.com/p/C-cWKx8vHuC/?img_index=1"
              alt="Urban Sketchers Istanbul"
              width={isMobile ? 400 : 350}
              height={isMobile ? 400 : 350}
            />
          </div>
          <div className={isMobile ? "pl-0" : "pl-8"}>
            <Typography
              variant="h1"
              sx={{ textAlign: isMobile ? "left" : "left" }}
            >
              Who are we?
            </Typography>
            <Typography variant="h4">
              We are a group of Istanbul residents who enjoy sketching.
            </Typography>
            <Typography variant="h6" className="pt-4">
              Through social media, we became aware of each other’s existence
              and began to take sketch walks together in Istanbul.
            </Typography>
            <Typography variant="h6">
              Our small group consists of students and workers. On weekends, we
              visit museums for sketching and walk around the city.
            </Typography>
            <Typography variant="h6">
              And of course, we discuss sketches, pens, paints, and papers
              extensively!
            </Typography>
            <Link
              href={"https://www.instagram.com/urbansketchersistanbul/"}
              target="_blank"
            >
              <div className="flex flex-row hover:text-background mt-8">
                <Instagram />
                <Typography variant="body1" sx={{ marginLeft: "5px" }}>
                  @urbansketchersistanbul
                </Typography>
              </div>
            </Link>
          </div>
        </div>
      </ItemCard>
    </>
  );
}
