import router from "next/router";
import { Button, Flex, Image, useMediaQuery } from "@chakra-ui/react";

import { BackgroundContainer, PageBackButton, SimpleText, TextContainer } from "../components";
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
    <BackgroundContainer rota={"/"}>
      <Flex w={"100%"} align={"center"} direction={"column"} h={"100vh"} p={"20px"}>
        <Flex align={"center"} w={"100%"}>
          <Flex w={"100%"} direction={"column"} align={"center"}>
            <Image
              w={isLargerThan ? "100px" : "70px"}
              h={isLargerThan ? "100px" : "70px"}
              alt="logo"
              src="banner.png"
              mx={"10px"}
            />
            <Flex mt={"40px"} w={"80%"} align={"left"} direction={"column"}>
              <TextContainer text={"A barbearia barbearia foi inaugurada em 2019."} />
              <TextContainer text={"Contamos com uma equipe bastante especializada."} />
              <TextContainer
                text={"Temos duas unidades, a unidade Ponta Verde, e a unidade Eustáquio Gomes"}
              />
              <TextContainer
                text={
                  "Na barbearia oferecemos mais que barba, cabelo e bigode. Aqui você encontra e faz amigos, assiste futebol, tem cerveja gelada e muito mais. Venha fazer parte da nossa familia e entenda porquê somos o lugar para grandes homens."
                }
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </BackgroundContainer>
  );
}
