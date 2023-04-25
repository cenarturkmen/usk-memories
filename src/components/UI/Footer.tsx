import { useMediaQuery } from "@mui/material";
import React from "react";

export default function Footer() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  if (isMobile) {
    return (
      <footer
        className={
          "flex justify-center items-center h-16 bg-primary text-white w-full"
        }
      >
        Footer
      </footer>
    );
  }
  return (
    <footer
      className={
        "flex justify-center items-center h-16 bg-primary text-white w-full relative bottom-0"
      }
    >
      Footer
    </footer>
  );
}
