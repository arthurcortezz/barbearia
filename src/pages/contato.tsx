import router from "next/router";
import { Flex, useMediaQuery } from "@chakra-ui/react";

import { BackgroundContainer, ContatoContainer, PageBackButton, SimpleText } from "../components";

export default function AgendamentoPage() {
  const [isLargerThan] = useMediaQuery("(min-width: 960px)");
  return (
    <BackgroundContainer rota={"/"} pageName={"Contato"}>
      <Flex w={"100%"} align={"center"} direction={"column"} h={"100vh"}>
        <Flex w={"100%"} p={"10px"} direction={isLargerThan ? "row" : "column"}>
          <ContatoContainer>
            <SimpleText text={"Whatsapp"} fontSize={16} />
            <SimpleText text={"(82) 9 9999-9999"} fontSize={16} />
          </ContatoContainer>
          <ContatoContainer>
            <SimpleText text={"Telefone"} fontSize={16} />
            <SimpleText text={"(82) 3333-3333"} fontSize={16} />
          </ContatoContainer>
        </Flex>
        <Flex w={"100%"} p={"10px"} direction={isLargerThan ? "row" : "column"}>
          <ContatoContainer>
            <SimpleText text={"E-mail"} fontSize={16} />
            <SimpleText text={"barbearia@gmail.com"} fontSize={16} />
          </ContatoContainer>
          <ContatoContainer>
            <SimpleText text={"Local"} fontSize={16} />
            <SimpleText text={"Ponta verde e Eustáquio Gomes"} fontSize={16} />
          </ContatoContainer>
        </Flex>
      </Flex>
    </BackgroundContainer>
  );
}
