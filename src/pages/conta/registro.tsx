import router from "next/router";
import { useEffect, useState } from "react";
import { Button, Flex, useMediaQuery } from "@chakra-ui/react";

import { MessageToast, SimpleInput, SimpleText } from "../../components";
import { ContaController } from "../../controllers";

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
      MessageToast.sucess("teste");
      await ContaController.cadastro(objeto);
    } else {
      throw "As senhas precisam ser iguais!";
    }
  };

  return (
    <Flex w={"100%"} justifyContent={"center"} align={"center"} direction={"column"} h={"100vh"}>
      <Flex
        color={"black"}
        position={"absolute"}
        top={5}
        left={20}
        onClick={router.back}
        cursor={"pointer"}>
        VOLTAR
      </Flex>
      <SimpleText color={"black"} fontSize={20} text={"Faça login"} />
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
          mt={"40px"}
          fontSize={isLargerThan ? 16 : 12}
          bg={"green.400"}
          color={"black"}
          onClick={() => handleOnChange()}>
          Enviar
        </Button>
        <Flex
          justifyContent={"center"}
          mt={"10px"}
          onClick={() => router.push("/conta/login")}
          cursor={"pointer"}>
          <SimpleText
            color={"black"}
            fontSize={13}
            text={"Já possui conta? Faça login clicando aqui."}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
