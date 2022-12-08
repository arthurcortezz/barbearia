import { useEffect, useState, useContext } from "react";
import { BsTrashFill } from "react-icons/bs";
import { Flex, Icon } from "@chakra-ui/react";
import { AiTwotoneEdit } from "react-icons/ai";

import { MessageToast } from "../../services";
import { AgendamentoController } from "../../controllers";
import {
  BackgroundContainer,
  GetReturnJson,
  SimpleButton,
  SimpleSelect,
  SimpleText,
} from "../../components";
import { GlobalContext } from "../../context";

export default function AgendamentoPage() {
  const global = useContext(GlobalContext);
  const [array, setArray] = useState<any>();
  const [editar, setEditar] = useState<boolean>(false);
  const [reload, setReload] = useState<boolean>(false);
  const [codigo, setCodigo] = useState<number | undefined>();
  const [data, setData] = useState<string>("");
  const [horario, setHorario] = useState<string>("");
  const [local, setLocal] = useState<string>("");
  const [objeto, setObjeto] = useState<any>("");

  const listAll = async () => {
    const list = await AgendamentoController.listarTodosAgendamento();
    const objeto = await GetReturnJson(list);
    setArray(objeto);
  };

  const deleteAgendamento = async (codigo: number) => {
    const retorno = await AgendamentoController.deletarAgendamento(codigo);
    const objetoRetorno = await GetReturnJson(retorno);
    if (objetoRetorno.status === 200) setReload(!reload);
    MessageToast.sucesso(objetoRetorno.data);
  };

  const editarAgendamento = async (objeto: any) => {
    setObjeto(objeto);
    setCodigo(objeto.codigo);
    setData(objeto.data);
    setHorario(objeto.horario);
    setLocal(objeto.local);

    if (objeto) setEditar(true);
  };

  const handleOnChange = async () => {
    if (data && horario && local && codigo) {
      const retorno = await AgendamentoController.alterarAgendamento({
        data,
        horario,
        local,
        codigo,
      });
      MessageToast.sucesso(retorno.data);
      setEditar(!editar);
    } else {
      MessageToast.erro("Todos os campos são obrigatórios!");
    }
  };

  useEffect(() => {
    listAll();
  }, [reload, objeto, editar]);

  return (
    <BackgroundContainer pageName={"Lista Agendamentos"} rota={"/agendamento"}>
      {!editar ? (
        <Flex w={"100%"} align={"center"} direction={"column"} h={"100vh"} p={"20px"}>
          <Flex mt={"30px"} w={"100%"} direction={"column"}>
            <Flex justifyContent={"space-between"} border={"1px solid white"} p={"5px"}>
              <Flex w={"200px"}>
                <SimpleText fontSize={14} text={"Nome"} />
              </Flex>
              <Flex w={"200px"}>
                <SimpleText fontSize={14} text={"Celular"} />
              </Flex>
              <Flex w={"200px"}>
                <SimpleText fontSize={14} text={"Email"} />
              </Flex>
              <Flex w={"200px"}>
                <SimpleText fontSize={14} text={"Data"} />
              </Flex>
              <Flex w={"200px"}>
                <SimpleText fontSize={14} text={"Hora"} />
              </Flex>
              <Flex w={"200px"}>
                <SimpleText fontSize={14} text={"Local"} />
              </Flex>
              <Flex w={"100px"} justifyContent={"space-between"}>
                <SimpleText fontSize={14} text={"Editar/Excluir"} />
              </Flex>
            </Flex>
            {array &&
              array.map((e: any, key: any) => (
                <Flex
                  key={key}
                  justifyContent={"space-between"}
                  border={"1px solid white"}
                  p={"5px"}>
                  <Flex w={"200px"}>
                    <SimpleText fontSize={12} fontWeight={"200"} text={e.nome} />
                  </Flex>
                  <Flex w={"200px"}>
                    <SimpleText fontSize={12} fontWeight={"200"} text={e.celular} />
                  </Flex>
                  <Flex w={"200px"}>
                    <SimpleText fontSize={12} fontWeight={"200"} text={e.email} />
                  </Flex>
                  <Flex w={"200px"}>
                    <SimpleText fontSize={12} fontWeight={"200"} text={e.data} />
                  </Flex>
                  <Flex w={"200px"}>
                    <SimpleText fontSize={12} fontWeight={"200"} text={e.horario} />
                  </Flex>
                  <Flex w={"200px"}>
                    <SimpleText fontSize={12} fontWeight={"200"} text={e.local} />
                  </Flex>
                  <Flex w={"100px"} justifyContent={"space-between"}>
                    <Icon
                      cursor={"pointer"}
                      as={AiTwotoneEdit}
                      onClick={() => editarAgendamento(e)}
                    />
                    <Icon
                      cursor={"pointer"}
                      as={BsTrashFill}
                      onClick={() => deleteAgendamento(e.codigo)}
                    />
                  </Flex>
                </Flex>
              ))}
          </Flex>
        </Flex>
      ) : (
        <Flex direction={"column"} w={"40%"} h={"100vh"}>
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
          <SimpleButton name={"Enviar"} handleOnChange={() => handleOnChange()} />
        </Flex>
      )}
    </BackgroundContainer>
  );
}
