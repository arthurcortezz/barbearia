import router from "next/router";
import { useContext } from "react";
import { Button, Flex, useMediaQuery } from "@chakra-ui/react";

import { BackgroundContainer, SimpleButton, SimpleText } from "../../components";
import { GlobalContext } from "../../context";

export default function AgendamentoPage() {
  const global = useContext(GlobalContext);
  const [isLargerThan] = useMediaQuery("(min-width: 960px)");
  return (
    <BackgroundContainer pageName={"Agendamentos"} rota={"/"}>
      <Flex w={"100%"} align={"center"} direction={"column"} h={"100vh"}>
        <Flex align={"center"} mt={"30px"} w={isLargerThan ? "40%" : "100%"} direction={"column"}>
          {global.user ? (
            <Flex w={"100%"} direction={"column"}>
              <SimpleButton
                name={"Novo agendamento"}
                handleOnChange={() => router.push("agendamento/novo")}
                color={"yellow.400"}
              />
              {global.user?.permissao === "administrador" ? (
                <SimpleButton
                  name={"Visualizar todos agendamentos"}
                  handleOnChange={() => router.push("agendamento/listar")}
                  color={"yellow.400"}
                />
              ) : (
                <SimpleButton
                  name={"Visualizar seus Agendamentos"}
                  handleOnChange={() => router.push("agendamento/listar")}
                  color={"yellow.400"}
                />
              )}
            </Flex>
          ) : (
            <>
              <SimpleText fontSize={16} text={"Faça login para realizar o agendamento conosco!"} />
              <SimpleButton
                name={"Fazer login"}
                handleOnChange={() => router.push("conta/login")}
                color={"yellow.400"}
              />
            </>
          )}
        </Flex>
      </Flex>
    </BackgroundContainer>
  );
}
