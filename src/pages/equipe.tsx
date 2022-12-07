import router from "next/router";
import { Button, Flex, Image, useMediaQuery } from "@chakra-ui/react";

import { SimpleText } from "../components";
import { useContext } from "react";
import { GlobalContext } from "../context";

export default function AgendamentoPage() {
  const [isLargerThan] = useMediaQuery("(min-width: 960px)");
  const global = useContext(GlobalContext);

  const logout = () => {
    global.setUsuario(null);
    router.push("/");
  };
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
      <Flex w={"100%"} mt={"40px"} align={"center"} direction={"column"}>
        <SimpleText fontSize={20} text={"Conheça nossa equipe!"} color={"black"} />
      </Flex>
    </Flex>
  );
}
