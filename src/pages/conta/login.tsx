import router from "next/router";
import { useContext, useEffect, useState } from "react";
import { Button, Flex, useMediaQuery } from "@chakra-ui/react";
import { MdOutlineArrowBack } from "react-icons/md";

import { BackgroundContainer, GetReturnJson, PageBackButton, SimpleButton, SimpleInput, SimpleText } from "../../components";
import { ContaController } from "../../controllers";
import { GlobalContext } from "../../context";
import { MessageToast } from "../../services";

export default function AgendamentoPage() {
  const global = useContext(GlobalContext);

  const [senha, setSenha] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isLargerThan] = useMediaQuery("(min-width: 960px)");

  const handleOnChange = async () => {
    const result = await ContaController.login(email, senha).catch(err => MessageToast.erro("Usuário e/ou senha incorretos"));
    if (result) {
      const usuario = await GetReturnJson(result);
      global.setUsuario(usuario);
      MessageToast.sucesso("Logado com sucesso!");
      router.push("/");
    }
  };

  return (
    <BackgroundContainer pageName={"Login"} rota={"/conta"}>
      <Flex w={"100%"} align={"center"} direction={"column"} h={"100vh"}>
        <Flex align={"center"} mt={"30px"} w={isLargerThan ? "40%" : "100%"} direction={"column"}>
          <SimpleInput name={"E-mail: "} label={"Digite e-mail"} value={email} onChange={(e: any) => setEmail(e.target.value)} />
          <SimpleInput name={"Senha: "} label={"Digite a senha"} type={"password"} value={senha} onChange={(e: any) => setSenha(e.target.value)} />
          <SimpleButton name={"Enviar"} handleOnChange={() => handleOnChange()} />
          <Flex justifyContent={"center"} mt={"10px"} onClick={() => router.push("/conta/registro")} cursor={"pointer"}>
            <SimpleText fontSize={13} text={"Faça o seu cadastro clicando aqui."} />
          </Flex>
        </Flex>
      </Flex>
    </BackgroundContainer>
  );
}
