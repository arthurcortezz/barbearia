import router from "next/router";
import { useContext } from "react";
import { Button, Flex } from "@chakra-ui/react";

import { SimpleText } from "../../components";
import { GlobalContext } from "../../context";

export default function AgendamentoPage() {
  const global = useContext(GlobalContext);
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
          <SimpleText color={"black"} fontSize={20} text={"Agendamentos"} />
          <Flex w={"100%"} direction={"column"}>
            <Button
              mt={"10px"}
              fontSize={16}
              bg={"yellow.400"}
              color={"black"}
              onClick={() => router.push("agendamento/novo")}>
              Novo
            </Button>
            <Button
              mt={"10px"}
              fontSize={16}
              bg={"yellow.400"}
              color={"black"}
              onClick={() => router.push("agendamento/listar")}>
              Listar Agendamentos
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
          <SimpleText color={"black"} fontSize={20} text={"Agendamentos"} />
          <Flex mt={"30px"} w={"100%"} direction={"column"} align={"center"}>
            <SimpleText
              color={"black"}
              fontSize={16}
              text={"Faça login para realizar o agendamento conosco!"}
            />
            <Button
              mt={"10px"}
              fontSize={16}
              bg={"yellow.400"}
              color={"black"}
              onClick={() => router.push("conta/login")}>
              Fazer login
            </Button>
          </Flex>
        </>
      )}
    </Flex>
  );
}
