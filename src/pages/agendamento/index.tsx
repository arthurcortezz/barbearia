import router from "next/router";
import { Button, Flex } from "@chakra-ui/react";

import { SimpleText } from "../../components";

export default function AgendamentoPage() {
  return (
    <Flex w={"100%"} align={"center"} direction={"column"} h={"100vh"} p={"20px"}>
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
          onClick={() => router.push("agendamento/alterar")}>
          Alterar
        </Button>
        <Button
          mt={"10px"}
          fontSize={16}
          bg={"yellow.400"}
          color={"black"}
          onClick={() => router.push("agendamento/listar")}>
          Listar Todos
        </Button>
      </Flex>
    </Flex>
  );
}
