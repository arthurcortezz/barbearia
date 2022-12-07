import router from "next/router";
import { Button, Flex } from "@chakra-ui/react";

import { BackgroundContainer, PageBackButton, SimpleButton, SimpleText } from "../../components";
import { useContext } from "react";
import { GlobalContext } from "../../context";

export default function AgendamentoPage() {
  const global = useContext(GlobalContext);

  const logout = () => {
    global.setUsuario(null);
    router.push("/");
  };
  return (
    <BackgroundContainer pageName={"Conta"} rota={"/"}>
      <Flex w={"100%"} align={"center"} direction={"column"} h={"100vh"}>
        {global.user ? (
          <Flex align={"center"} mt={"40px"} w={"100%"} direction={"column"}>
            <SimpleButton
              color={"yellow.400"}
              name={"Editar conta"}
              handleOnChange={() => router.push("conta/editar")}
            />
            <SimpleButton
              color={"yellow.400"}
              name={"Sair da Conta"}
              handleOnChange={() => logout()}
            />
          </Flex>
        ) : (
          <Flex align={"center"} mt={"40px"} w={"100%"} direction={"column"}>
            <SimpleButton
              handleOnChange={() => router.push("conta/registro")}
              name={"Registrar"}
              color={"yellow.400"}
            />
            <SimpleButton
              handleOnChange={() => router.push("conta/login")}
              name={"Logar"}
              color={"yellow.400"}
            />
          </Flex>
        )}
      </Flex>
    </BackgroundContainer>
  );
}
