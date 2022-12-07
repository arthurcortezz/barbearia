import router from "next/router";
import { useEffect, useState } from "react";
import { Button, Flex, useMediaQuery } from "@chakra-ui/react";

import { MessageToast } from "../../services";
import { ContaController } from "../../controllers";
import { BackgroundContainer, PageBackButton, SimpleInput, SimpleText } from "../../components";

export default function AgendamentoPage() {
  const [nome, setNome] = useState<string>("");
  const [celular, setCelular] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [cSenha, setCsenha] = useState<string>("");
  const [isLargerThan] = useMediaQuery("(min-width: 960px)");

  const handleOnChange = async () => {
    if (senha === cSenha) {
      const objeto = { nome, celular, email, senha };
      await ContaController.cadastro(objeto);
      MessageToast.sucesso("Usuário cadastrado com sucesso!");
      router.push("/conta/login");
    } else {
      MessageToast.erro("As senhas precisam ser iguais!");
    }
  };

  return (
    <BackgroundContainer pageName={"Registrar"} rota={"/conta"}>
      <Flex w={"100%"} justifyContent={"center"} align={"center"} direction={"column"}>
        <Flex w={"40%"} direction={"column"}>
          <SimpleInput
            name={"Nome: "}
            label={"Digite seu nome"}
            value={nome}
            onChange={(e: any) => setNome(e.target.value)}
          />
          <SimpleInput
            name={"Celular: "}
            label={"Digite seu celular"}
            value={celular}
            onChange={(e: any) => setCelular(e.target.value)}
          />
          <SimpleInput
            name={"E-mail: "}
            label={"Digite seu e-mail"}
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
          <SimpleInput
            name={"Senha: "}
            label={"Digite sua senha"}
            type={"password"}
            value={senha}
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
            mt={"20px"}
            fontSize={isLargerThan ? 16 : 12}
            bg={"green.400"}
            onClick={() => handleOnChange()}>
            Enviar
          </Button>
          <Flex
            justifyContent={"center"}
            mt={"10px"}
            onClick={() => router.push("/conta/login")}
            cursor={"pointer"}>
            <SimpleText fontSize={13} text={"Já possui conta? Faça login clicando aqui."} />
          </Flex>
        </Flex>
      </Flex>
    </BackgroundContainer>
  );
}
