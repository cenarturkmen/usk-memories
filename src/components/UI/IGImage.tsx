import { convertInstagramUrl } from "@/utils/convert-ig-url";
import { isValidInstagramPhotoUrl } from "@/utils/is-valid-instagram-url";
import Image from "next/image";
import Link from "next/link";

interface IGImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export function IGImage(props: IGImageProps) {
  const heightP = props.height + "px";
  const widthP = props.width + "px";
  if (isValidInstagramPhotoUrl(props.src)) {
    return (
      <div style={{ width: widthP, height: heightP }}>
        <Link
          href={props.src}
          target="_blank"
          style={{ width: "max-content", display: "inherit" }}
        >
          <Image
            src={convertInstagramUrl(props.src) + "media/?size=l"}
            alt={props.alt}
            width={props.width}
            height={props.height}
            style={{ objectFit: "contain" }}
          />
        </Link>
      </div>
    );
  } else {
    return (
      <div style={{ width: widthP, height: heightP }}>
        😥 This is not a valid Instagram photo URL. 😥
      </div>
    );
  }
}
