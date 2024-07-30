import { Typography, useMediaQuery } from "@mui/material";
import { ItemCard } from "./ItemCard";
import { Instagram, Mail } from "@mui/icons-material";

export default function ContactInfo() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <ItemCard justify="center" direction="column">
      <Typography variant="h5" sx={{ mb: "10px" }}>
        Information
      </Typography>
      <div className={"flex ".concat(isMobile ? "flex-col" : "flex-row")}>
        <div className={"flex ".concat(isMobile ? "flex-row" : "flex-row")}>
          <Mail sx={{ margin: "0px 5px 0 0" }} />
          <Typography variant="body1">Email</Typography>
        </div>
        <a href="mailto:urbansketchersistanbul@gmail.com" className=" ">
          <Typography
            variant="body1"
            sx={{ marginLeft: isMobile ? "0rem" : "1rem" }}
          >
            urbansketchersistanbul@gmail.com
          </Typography>
        </a>
      </div>

      <div className={"flex mt-2 ".concat(isMobile ? "flex-col" : "flex-row")}>
        <div className={"flex ".concat(isMobile ? "flex-row" : "flex-row")}>
          <Instagram sx={{ margin: "0px 5px 0 0" }} />
          <Typography variant="body1">Instagram</Typography>
        </div>
        <a
          href="https://www.instagram.com/urbansketchersistanbul/"
          target="_blank"
        >
          <Typography
            variant="body1"
            sx={{ marginLeft: isMobile ? "0rem" : "1rem" }}
          >
            @urbansketchersistanbul
          </Typography>
        </a>
      </div>
    </ItemCard>
  );
}
