import router from "next/router";
import { useContext, useEffect, useState } from "react";
import { Button, Flex, useMediaQuery } from "@chakra-ui/react";

import { SimpleInput, SimpleText } from "../../components";
import { ContaController } from "../../controllers";
import { GlobalContext } from "../../context";

export default function AgendamentoPage() {
  const global = useContext(GlobalContext);

  const [senha, setSenha] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isLargerThan] = useMediaQuery("(min-width: 960px)");

  const handleOnChange = async () => {
    const result = await ContaController.login(email, senha);
    const obj = JSON.stringify(result);
    const contact = JSON.parse(obj);
    if (contact.content.length > 0) {
      global.setUsuario(contact.content[0]);
      router.push("/");
    } else {
      throw "Usuário e/ou senha incorretos!";
    }
  };

  return (
    <Flex w={"100%"} align={"center"} direction={"column"} h={"100vh"}>
      <Flex
        color={"black"}
        position={"absolute"}
        top={5}
        left={20}
        onClick={router.back}
        cursor={"pointer"}>
        VOLTAR
      </Flex>
      <Flex justifyContent={"center"} w={"40%"} direction={"column"} mt={"40px"}>
        <SimpleText
          color={"black"}
          fontSize={20}
          text={"Página em manutenção, tente novamente mais tarde!"}
        />
        <Button
          mt={"40px"}
          fontSize={isLargerThan ? 16 : 12}
          bg={"green.400"}
          color={"black"}
          onClick={() => router.push("/")}>
          Voltar
        </Button>
      </Flex>
    </Flex>
  );
}
