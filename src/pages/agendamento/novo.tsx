import router from "next/router";
import { useContext, useState } from "react";
import { Button, Flex, useMediaQuery } from "@chakra-ui/react";

import { GlobalContext } from "../../context";
import { BackgroundContainer, SimpleButton, SimpleSelect, SimpleText } from "../../components";
import { AgendamentoController, ContaController } from "../../controllers";
import { MessageToast } from "../../services";

export default function AgendamentoPage() {
  const global = useContext(GlobalContext);
  const [data, setData] = useState<string>("");
  const [horario, setHorario] = useState<string>("");
  const [local, setLocal] = useState<string>("");
  const [isLargerThan] = useMediaQuery("(min-width: 960px)");

  const handleOnChange = async () => {
    try {
      const objeto = {
        nome: global.user?.nome,
        email: global.user?.email,
        celular: global.user?.celular,
        data: data,
        horario: horario,
        local: local,
      };
      await AgendamentoController.criarAgendamento(objeto);
      MessageToast.sucesso("Agendamento feito com sucesso!");
      router.push("/agendamento/listar");
    } catch (error: any) {
      MessageToast.erro("Ocorreu um erro.");
    }
  };

  return (
    <BackgroundContainer pageName={"Novo agendamento"} rota={"/agendamento"}>
      <Flex w={"100%"} align={"center"} direction={"column"} h={"100vh"}>
        <Flex w={"40%"} direction={"column"} align={"center"} mt={"60px"}>
          <SimpleSelect
            name={"Data: "}
            label={"Selecione a data"}
            value={data}
            opcoes={[
              { label: "Segunda", value: "Segunda" },
              { label: "Terça-Feira", value: "Terça-Feira" },
              { label: "Quarta-Feira", value: "Quarta-Feira" },
              { label: "Quinta-Feira", value: "Quinta-Feira" },
              { label: "Sexta-Feira", value: "Sexta-Feira" },
              { label: "Sábado", value: "Sábado" },
            ]}
            onChange={(e: any) => setData(e.target.value)}
          />
          {data && (
            <SimpleSelect
              name={"Horário: "}
              label={"Selecione o horário"}
              value={horario}
              opcoes={[
                { label: "09:00", value: "09:00" },
                { label: "10:00", value: "10:00" },
                { label: "11:00", value: "11:00" },
                { label: "13:00", value: "13:00" },
                { label: "14:00", value: "14:00" },
                { label: "15:00", value: "15:00" },
                { label: "16:00", value: "16:00" },
                { label: "17:00", value: "17:00" },
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
                { label: "Ponta Verde", value: "Ponta Verde" },
                { label: "Eustáquio Gomes", value: "Eustáquio Gomes" },
              ]}
              onChange={(e: any) => setLocal(e.target.value)}
            />
          )}
          {data && horario && local && (
            <SimpleButton name={"Enviar"} handleOnChange={() => handleOnChange()} />
          )}
        </Flex>
      </Flex>
    </BackgroundContainer>
  );
}
