import router from "next/router";
import { useContext, useEffect, useState } from "react";
import { Button, Flex, useMediaQuery } from "@chakra-ui/react";

import { BackgroundContainer, SimpleInput, SimpleText } from "../../components";
import { ContaController } from "../../controllers";
import { GlobalContext } from "../../context";

export default function AgendamentoPage() {
  const global = useContext(GlobalContext);

  const [nome, setNome] = useState<string | undefined>(global.user?.nome);
  const [celular, setCelular] = useState<string | undefined>(global.user?.celular);
  const [email, setEmail] = useState<string | undefined>(global.user?.email);
  const [senha, setSenha] = useState<string | undefined>(global.user?.senha);
  const [cSenha, setCsenha] = useState<string>("");
  const [isLargerThan] = useMediaQuery("(min-width: 960px)");

  return (
    <BackgroundContainer
      rota={"/conta"}
      pageName={`Olá ${global.user?.nome}, edite sua conta aqui`}>
      <Flex w={"100%"} align={"center"} direction={"column"} h={"100vh"}>
        <Flex align={"center"} w={"40%"} direction={"column"} mt={"40px"}>
          <SimpleInput
            name={"Nome: "}
            label={"Digite seu nome"}
            value={nome ? nome : ""}
            onChange={(e: any) => setNome(e.target.value)}
          />
          <SimpleInput
            name={"Celular: "}
            label={"Digite seu celular"}
            value={celular ? celular : ""}
            onChange={(e: any) => setCelular(e.target.value)}
          />
          <SimpleInput
            name={"E-mail: "}
            label={"Digite seu e-mail"}
            value={email ? email : ""}
            onChange={(e: any) => setEmail(e.target.value)}
          />
          <SimpleInput
            name={"Senha: "}
            label={"Digite sua senha"}
            type={"password"}
            value={senha ? senha : ""}
            onChange={(e: any) => setSenha(e.target.value)}
          />
          <SimpleInput
            name={"Confirmar Senha: "}
            label={"Confirme sua senha"}
            type={"password"}
            value={cSenha}
            onChange={(e: any) => setCsenha(e.target.value)}
          />
          <Button
            w={"100%"}
            mt={"40px"}
            fontSize={isLargerThan ? 16 : 12}
            bg={"green.400"}
            color={"black"}
            onClick={() => console.log("enviar")}>
            Enviar
          </Button>
        </Flex>
      </Flex>
    </BackgroundContainer>
  );
}
