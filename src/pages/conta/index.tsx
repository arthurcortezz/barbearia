import router from "next/router";
import { Button, Flex } from "@chakra-ui/react";

import { SimpleText } from "../../components";
import { useContext } from "react";
import { GlobalContext } from "../../context";

export default function AgendamentoPage() {
  const global = useContext(GlobalContext);

  const logout = () => {
    global.setUsuario(null);
    router.push("/");
  };
  return (
    <Flex w={"100%"} align={"center"} direction={"column"} h={"100vh"} p={"20px"}>
      {global.user ? (
        <>
          <Flex
            color={"black"}
            position={"absolute"}
            top={5}
            left={20}
            onClick={router.back}
            cursor={"pointer"}>
            VOLTAR
          </Flex>
          <SimpleText color={"black"} fontSize={20} text={"Conta"} />
          <Flex w={"100%"} direction={"column"}>
            <Button
              mt={"10px"}
              fontSize={16}
              bg={"yellow.400"}
              color={"black"}
              onClick={() => router.push("conta/editar")}>
              Editar conta
            </Button>
            <Button
              mt={"10px"}
              fontSize={16}
              bg={"yellow.400"}
              color={"black"}
              onClick={() => logout()}>
              Sair da Conta
            </Button>
          </Flex>
        </>
      ) : (
        <>
          <Flex
            color={"black"}
            position={"absolute"}
            top={5}
            left={20}
            onClick={router.back}
            cursor={"pointer"}>
            VOLTAR
          </Flex>
          <Flex align={"center"} mt={"40px"} w={"100%"} direction={"column"}>
            <SimpleText color={"black"} fontSize={20} text={"Conta"} />
            <Button
              w={"100%"}
              mt={"10px"}
              fontSize={16}
              bg={"yellow.400"}
              color={"black"}
              onClick={() => router.push("conta/registro")}>
              Registrar
            </Button>
            <Button
              w={"100%"}
              mt={"10px"}
              fontSize={16}
              bg={"yellow.400"}
              color={"black"}
              onClick={() => router.push("conta/login")}>
              Logar
            </Button>
          </Flex>
        </>
      )}
    </Flex>
  );
}
