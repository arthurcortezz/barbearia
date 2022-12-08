import { Flex, Image, useMediaQuery } from "@chakra-ui/react";

import SimpleText from "../texts/simpleText";
import ImageLabel from "../labels/imageLabel";

interface Props {
  observacao?: string;
  valor: string;
  src: string;
  alt: string;
}

export default function ProdutoContainer({ observacao, valor, src, alt }: Props) {
  const [isLargerThan] = useMediaQuery("(min-width: 960px)");
  return (
    <Flex
      h={"220px"}
      m={"5px"}
      w={isLargerThan ? "20%" : "100%"}
      align={"center"}
      direction={"column"}
      bg={"rgba(400,400,400,0.1)"}
      borderRadius={"5px"}
      py={"20px"}>
      <ImageLabel src={src} alt={alt} />
      <SimpleText fontSize={17} text={valor} />
      {observacao && <SimpleText fontSize={14} text={observacao} />}
    </Flex>
  );
}
