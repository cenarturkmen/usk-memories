import { Instagram } from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  if (isMobile) {
    return (
      <footer
        className={
          "flex justify-center items-center h-16 bg-background text-white w-full"
        }
      >
        <Link
          href={"https://www.instagram.com/urbansketchersistanbul/"}
          target="_blank"
        >
          <Instagram sx={{ marginRight: "5px" }} />
          Instagram
        </Link>
      </footer>
    );
  }
  return (
    <footer className="bg-background py-4 relative bottom-0 w-full">
      <div className="container mx-auto text-center">
        <Link
          href={"https://www.instagram.com/urbansketchersistanbul/"}
          target="_blank"
        >
          <Instagram sx={{ marginRight: "5px" }} />
          Instagram
        </Link>
      </div>
    </footer>
  );
}
