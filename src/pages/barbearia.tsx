import router from "next/router";
import { Button, Flex, Image, useMediaQuery } from "@chakra-ui/react";

import { BackgroundContainer, PageBackButton, SimpleText } from "../components";
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
            <Flex mt={"40px"} align={"center"} direction={"column"}>
              <SimpleText
                fontSize={18}
                text={
                  "Na Black Jack oferecemos mais que barba, cabelo e bigode. Aqui você encontra e faz amigos, assiste futebol, tem cerveja gelada e muito mais. Venha fazer parte da nossa familia e entenda porquê somos o lugar para grandes homens."
                }
              />
              <SimpleText fontSize={18} text={"A barbearia black jack foi inaugurada em 2019"} />
              <SimpleText fontSize={18} text={"A barbearia black jack foi inaugurada em 2019"} />
              <SimpleText fontSize={18} text={"A barbearia black jack foi inaugurada em 2019"} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </BackgroundContainer>
  );
}
