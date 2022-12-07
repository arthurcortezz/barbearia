import router from "next/router";
import { Flex } from "@chakra-ui/react";

import { BackgroundContainer, PageBackButton, SimpleText } from "../components";

export default function AgendamentoPage() {
  return (
    <BackgroundContainer rota={"/"} pageName={"Serviços"}>
      <Flex
        w={"100%"}
        justifyContent={"center"}
        align={"center"}
        direction={"column"}
        h={"100vh"}></Flex>
    </BackgroundContainer>
  );
}
