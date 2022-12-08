import router from "next/router";
import { Flex, useMediaQuery } from "@chakra-ui/react";

import {
  BackgroundContainer,
  ImageLabel,
  MidiaContainer,
  SimpleButton,
  SimpleText,
} from "../components";

export default function AgendamentoPage() {
  const [isLargerThan] = useMediaQuery("(min-width: 960px)");
  return (
    <BackgroundContainer rota={"/"} pageName={"Equipe"}>
      <Flex w={"100%"} align={"center"} direction={"column"} h={"100vh"}>
        <Flex
          w={"100%"}
          p={"10px"}
          direction={isLargerThan ? "row" : "column"}
          justifyContent={"center"}>
          <MidiaContainer>
            <ImageLabel alt={"b"} src={"midia13.jpg"} />
          </MidiaContainer>
          <MidiaContainer>
            <ImageLabel alt={"b"} src={"midia14.jpg"} />
          </MidiaContainer>
        </Flex>
      </Flex>
    </BackgroundContainer>
  );
}
