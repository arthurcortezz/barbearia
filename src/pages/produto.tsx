import router from "next/router";
import { Flex, Input } from "@chakra-ui/react";

import { BackgroundContainer, PageBackButton, ServicoContainer, SimpleText } from "../components";
import InputMask from "react-input-mask";

export default function AgendamentoPage() {
  return (
    <BackgroundContainer rota={"/"} pageName={"Produtos"}>
      <Flex w={"100%"} align={"start"} direction={"row"} h={"100vh"} justify={"center"}>
        <ServicoContainer valor={"40,00"} alt={"midia1"} src={"servicos.webp"} />
        <ServicoContainer
          valor={"76,00"}
          observacao={"(Uso oral)"}
          alt={"midia1"}
          src={"servicos1.webp"}
        />
        <ServicoContainer
          valor={"90,00"}
          observacao={"(Uso oral)"}
          alt={"midia1"}
          src={"servicos2.jpg"}
        />
      </Flex>
    </BackgroundContainer>
  );
}
