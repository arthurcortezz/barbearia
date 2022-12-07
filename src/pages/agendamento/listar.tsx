import router from "next/router";
import { useEffect, useState } from "react";
import { BsTrashFill } from "react-icons/bs";
import { Flex, Icon } from "@chakra-ui/react";
import { AiTwotoneEdit } from "react-icons/ai";

import { BackgroundContainer, SimpleText } from "../../components";
import { AgendamentoController } from "../../controllers";

export default function AgendamentoPage() {
  const [array, setArray] = useState<any>();

  const listAll = async () => {
    const list = await AgendamentoController.listarAgendamento();
    const objeto = JSON.stringify(list);
    const contact = JSON.parse(objeto);
    setArray(contact);
  };

  useEffect(() => {
    listAll();
  }, []);

  return (
    <BackgroundContainer pageName={"Lista Agendamentos"} rota={"/agendamento"}>
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
            <Flex
              cursor={"pointer"}
              onClick={() => console.log("EDITARE")}
              w={"100px"}
              justifyContent={"space-between"}>
              <SimpleText fontSize={14} text={"Editar"} />
              <SimpleText fontSize={14} text={"Excluir"} />
            </Flex>
          </Flex>
          {array &&
            array.map((e: any, key: any) => (
              <Flex key={key} justifyContent={"space-between"} border={"1px solid white"} p={"5px"}>
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
                    onClick={() => console.log(e.codigo, e.nome)}
                  />
                  <Icon
                    cursor={"pointer"}
                    as={BsTrashFill}
                    onClick={() => console.log(e.codigo, e.nome)}
                  />
                </Flex>
              </Flex>
            ))}
        </Flex>
      </Flex>
    </BackgroundContainer>
  );
}
