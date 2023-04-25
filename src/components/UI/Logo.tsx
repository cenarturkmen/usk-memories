import Link from "next/link";
import Image from "next/image";
import { Box } from "@mui/material";

// create interface for dark and light
interface LogoProps {
  dark: boolean;
  width: number;
  height: number;
}

export default function Logo({ dark, width, height }: LogoProps) {
  return (
    <Link href="/">
      <Image
        src={dark ? "/images/logo-dark.png" : "/images/logo-light.png"}
        alt="Logo"
        priority={true}
        width={width}
        height={height}
        quality={100}
      />
    </Link>
  );
}
