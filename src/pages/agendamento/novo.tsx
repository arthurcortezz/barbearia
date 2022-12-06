import router from "next/router";
import { useContext, useState } from "react";
import { Button, Flex, useMediaQuery } from "@chakra-ui/react";

import { GlobalContext } from "../../context";
import { SimpleSelect, SimpleText } from "../../components";
import { AgendamentoController, ContaController } from "../../controllers";

export default function AgendamentoPage() {
  const global = useContext(GlobalContext);
  const [data, setData] = useState<string>("");
  const [horario, setHorario] = useState<string>("");
  const [local, setLocal] = useState<string>("");
  const [isLargerThan] = useMediaQuery("(min-width: 960px)");

  const handleOnChange = async () => {
    const response = await ContaController.buscarUsuario(global.user);
    const stringJson = JSON.stringify(response);
    const result = JSON.parse(stringJson);
    const objeto = {
      data,
      horario,
      local,
      nome: result.data.nome,
      email: result.data.email,
      celular: result.data.celular,
    };
    await AgendamentoController.criarAgendamento(objeto);
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
      <Flex w={"40%"} direction={"column"} align={"center"} mt={"60px"}>
        <SimpleText color={"black"} fontSize={20} text={"Agende o seu horário"} />
        <SimpleSelect
          name={"Data: "}
          label={"Selecione a data"}
          value={data}
          opcoes={[
            { label: "Segunda", value: "seg" },
            { label: "Terça-Feira", value: "ter" },
            { label: "Quarta-Feira", value: "qua" },
            { label: "Quinta-Feira", value: "qui" },
            { label: "Sexta-Feira", value: "sex" },
            { label: "Sábado", value: "sab" },
          ]}
          onChange={(e: any) => setData(e.target.value)}
        />
        {data && (
          <SimpleSelect
            name={"Horário: "}
            label={"Selecione o horário"}
            value={horario}
            opcoes={[
              { label: "09:00", value: "9" },
              { label: "10:00", value: "10" },
              { label: "11:00", value: "11" },
              { label: "13:00", value: "13" },
              { label: "14:00", value: "14" },
              { label: "15:00", value: "15" },
              { label: "16:00", value: "16" },
              { label: "17:00", value: "17" },
            ]}
            onChange={(e: any) => setHorario(e.target.value)}
          />
        )}
        {data && horario && (
          <SimpleSelect
            name={"Local: "}
            label={"Selecione o local"}
            value={local}
            opcoes={[
              { label: "Ponta Verde", value: "pv" },
              { label: "Eustáquio Gomes", value: "eg" },
            ]}
            onChange={(e: any) => setLocal(e.target.value)}
          />
        )}
        {data && horario && local && (
          <Button
            mt={"40px"}
            fontSize={isLargerThan ? 16 : 12}
            bg={"green.400"}
            color={"black"}
            onClick={() => handleOnChange()}>
            Enviar
          </Button>
        )}
      </Flex>
    </Flex>
  );
}
