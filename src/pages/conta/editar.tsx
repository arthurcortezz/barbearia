import { useContext, useState } from "react";
import { Button, Flex, useMediaQuery } from "@chakra-ui/react";

import { BackgroundContainer, SimpleInput } from "../../components";
import { GlobalContext } from "../../context";
import { MessageToast } from "../../services";
import { ContaController } from "../../controllers";

export default function AgendamentoPage() {
  const global = useContext(GlobalContext);

  const [nome, setNome] = useState<string | undefined>(global.user?.nome);
  const [celular, setCelular] = useState<string | undefined>(global.user?.celular);
  const [email, setEmail] = useState<string | undefined>(global.user?.email);
  const [senha, setSenha] = useState<string | undefined>(global.user?.senha);
  const [cSenha, setCsenha] = useState<string>("");
  const [isLargerThan] = useMediaQuery("(min-width: 960px)");

  const editarUsuario = async () => {
    const objeto = {
      nome: nome ?? "",
      celular: celular ?? "",
      email: email ?? "",
      senha: senha ?? "",
      codigo: global.user?.codigo,
    };
    if (senha === cSenha) {
      const retorno = await ContaController.editarUsuario(objeto);
    } else {
      MessageToast.erro("As senhas não são iguais!");
    }
  };

  return (
    <BackgroundContainer
      rota={"/conta"}
      pageName={`Olá ${global.user?.nome}, edite sua conta aqui`}>
      <Flex w={"100%"} align={"center"} direction={"column"} h={"100vh"}>
        <Flex align={"center"} w={isLargerThan ? "40%" : "100%"} direction={"column"} mt={"10px"}>
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
            mt={"20px"}
            fontSize={isLargerThan ? 16 : 12}
            bg={"green.400"}
            color={"black"}
            onClick={() => editarUsuario()}>
            Enviar
          </Button>
        </Flex>
      </Flex>
    </BackgroundContainer>
  );
}
