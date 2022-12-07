import router from "next/router";
import { useContext } from "react";
import { Button, Flex } from "@chakra-ui/react";

import { BackgroundContainer, SimpleButton, SimpleText } from "../../components";
import { GlobalContext } from "../../context";

export default function AgendamentoPage() {
  const global = useContext(GlobalContext);
  return (
    <BackgroundContainer pageName={"Agendamentos"} rota={"/"}>
      <Flex w={"100%"} align={"center"} direction={"column"} h={"100vh"}>
        <Flex align={"center"} mt={"30px"} w={"40%"} direction={"column"}>
          {global.user ? (
            <Flex w={"100%"} direction={"column"}>
              <Button
                mt={"10px"}
                fontSize={16}
                bg={"yellow.400"}
                onClick={() => router.push("agendamento/novo")}>
                Novo
              </Button>
              <Button
                mt={"10px"}
                fontSize={16}
                bg={"yellow.400"}
                onClick={() => router.push("agendamento/listar")}>
                Listar Agendamentos
              </Button>
            </Flex>
          ) : (
            <>
              <SimpleText fontSize={16} text={"Faça login para realizar o agendamento conosco!"} />
              <SimpleButton
                name={"Fazer login"}
                handleOnChange={() => router.push("conta/login")}
                color={"yellow.400"}
                w={"400px"}
              />
            </>
          )}
        </Flex>
      </Flex>
    </BackgroundContainer>
  );
}
