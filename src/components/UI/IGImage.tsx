import { convertInstagramUrl } from "@/utils/convert-ig-url";
import Image from "next/image";
import Link from "next/link";

interface IGImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export function IGImage(props: IGImageProps) {
  return (
    <Link href={props.src} target="_blank">
      <Image
        src={convertInstagramUrl(props.src) + "media/?size=l"}
        alt={props.alt}
        width={props.width}
        height={props.height}
      />
    </Link>
  );
}
