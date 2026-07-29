import type { StaticImageData } from "next/image";

export interface HeroImage {
  id: number;
  src: string | StaticImageData;
  alt: string;
}
