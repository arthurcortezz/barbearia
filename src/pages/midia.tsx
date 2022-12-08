import router from "next/router";
import { Flex, Image, useMediaQuery } from "@chakra-ui/react";

import { BackgroundContainer, ImageLabel, MidiaContainer, SimpleText } from "../components";

export default function AgendamentoPage() {
  const [isLargerThan] = useMediaQuery("(min-width: 960px)");
  return (
    <BackgroundContainer rota={"/"} pageName={"Mídia"}>
      <Flex w={"100%"} align={"center"} direction={"column"} h={"100vh"}>
        <Flex
          w={"100%"}
          p={"10px"}
          direction={isLargerThan ? "row" : "column"}
          justifyContent={"center"}>
          <MidiaContainer>
            <ImageLabel alt={"b"} src={"midia1.jpg"} />
          </MidiaContainer>
          <MidiaContainer>
            <ImageLabel alt={"b"} src={"midia2.jpg"} />
          </MidiaContainer>
          <MidiaContainer>
            <ImageLabel alt={"b"} src={"midia3.png"} />
          </MidiaContainer>
          <MidiaContainer>
            <ImageLabel alt={"b"} src={"midia4.webp"} />
          </MidiaContainer>
        </Flex>
        <Flex
          w={"100%"}
          p={"10px"}
          direction={isLargerThan ? "row" : "column"}
          justifyContent={"center"}>
          <MidiaContainer>
            <ImageLabel alt={"b"} src={"midia5.jpg"} />
          </MidiaContainer>
          <MidiaContainer>
            <ImageLabel alt={"b"} src={"bg.jpg"} />
          </MidiaContainer>
        </Flex>
      </Flex>
    </BackgroundContainer>
  );
}
