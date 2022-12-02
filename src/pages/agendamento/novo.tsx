import router from "next/router";
import { useEffect, useState } from "react";
import { Button, Flex, useMediaQuery } from "@chakra-ui/react";

import { SimpleInput, SimpleText } from "../../components";
import { AgendamentoController } from "../../controllers";

export default function AgendamentoPage() {
  const [nome, setNome] = useState<string>("");
  const [celular, setCelular] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [data, setData] = useState<string>("");
  const [horario, setHorario] = useState<string>("");
  const [local, setLocal] = useState<string>("");
  const [isLargerThan] = useMediaQuery("(min-width: 960px)");
  const [array, setArray] = useState<any>();

  const listAll = async () => {
    const list = await AgendamentoController.listarAgendamento();
    const obj = JSON.stringify(list);
    const contact = JSON.parse(obj);
    setArray(contact);
  };

  const handleOnChange = async () => {
    const objeto = { nome, celular, email, data, horario, local };
    await AgendamentoController.criarAgendamento(objeto);
    listAll();
  };

  useEffect(() => {
    listAll();
  }, [array]);

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
      <SimpleText color={"black"} fontSize={20} text={"Agende o seu horário"} />
      <Flex w={"40%"} direction={"column"}>
        <SimpleInput
          name={"Nome: "}
          label={"Digite o nome"}
          value={nome}
          onChange={(e: any) => setNome(e.target.value)}
        />
        <SimpleInput
          name={"Celular: "}
          label={"Digite o celular"}
          value={celular}
          onChange={(e: any) => setCelular(e.target.value)}
        />
        <SimpleInput
          name={"E-mail: "}
          label={"Digite o email"}
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <SimpleInput
          name={"Data: "}
          label={"Selecione a data"}
          value={data}
          onChange={(e: any) => setData(e.target.value)}
        />
        <SimpleInput
          name={"Horário: "}
          label={"Selecione o horário"}
          value={horario}
          onChange={(e: any) => setHorario(e.target.value)}
        />
        <SimpleInput
          name={"Local: "}
          label={"Selecione o local"}
          value={local}
          onChange={(e: any) => setLocal(e.target.value)}
        />
        <Button
          mt={"40px"}
          fontSize={isLargerThan ? 16 : 12}
          bg={"green.400"}
          color={"black"}
          onClick={() => handleOnChange()}>
          Enviar
        </Button>
      </Flex>
    </Flex>
  );
}
