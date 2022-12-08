import { Image } from "@chakra-ui/react";

interface Props {
  src: string;
  alt: string;
  w?: string;
  h?: string;
}
export default function ImageLabel({ src, alt, w, h }: Props) {
  return <Image alt={alt} src={src} w={w ? w : "200px"} h={h ? h : "140px"} />;
}
