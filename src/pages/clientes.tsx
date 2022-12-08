import router from "next/router";
import { Flex, useMediaQuery } from "@chakra-ui/react";

import { BackgroundContainer, ImageLabel, MidiaContainer, SimpleText } from "../components";

export default function AgendamentoPage() {
  const [isLargerThan] = useMediaQuery("(min-width: 960px)");
  return (
    <BackgroundContainer rota={"/"} pageName={"Clientes"}>
      <Flex w={"100%"} align={"center"} direction={"column"} h={"100vh"}>
        <Flex
          w={"100%"}
          p={"10px"}
          direction={isLargerThan ? "row" : "column"}
          justifyContent={"center"}>
          <MidiaContainer>
            <ImageLabel alt={"b"} src={"midia7.jpg"} />
          </MidiaContainer>
          <MidiaContainer>
            <ImageLabel alt={"b"} src={"midia8.jpg"} />
          </MidiaContainer>
          <MidiaContainer>
            <ImageLabel alt={"b"} src={"midia9.webp"} />
          </MidiaContainer>
          <MidiaContainer>
            <ImageLabel alt={"b"} src={"midia10.jpg"} />
          </MidiaContainer>
        </Flex>
        <Flex
          w={"100%"}
          p={"10px"}
          direction={isLargerThan ? "row" : "column"}
          justifyContent={"center"}>
          <MidiaContainer>
            <ImageLabel alt={"b"} src={"midia11.jpg"} />
          </MidiaContainer>
          <MidiaContainer>
            <ImageLabel alt={"b"} src={"midia12.jpg"} />
          </MidiaContainer>
        </Flex>
      </Flex>
    </BackgroundContainer>
  );
}
