import router from "next/router";
import { useEffect, useState } from "react";
import { BsTrashFill } from "react-icons/bs";
import { Flex, Icon } from "@chakra-ui/react";
import { AiTwotoneEdit } from "react-icons/ai";

import { SimpleText } from "../../components";
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
    <Flex w={"100%"} align={"center"} direction={"column"} h={"100vh"} p={"20px"}>
      <Flex
        color={"black"}
        position={"absolute"}
        top={5}
        left={20}
        onClick={router.back}
        cursor={"pointer"}>
        VOLTAR
      </Flex>
      <SimpleText color={"black"} fontSize={20} text={"Alterar Agendamento"} />
      <Flex mt={"30px"} w={"100%"} direction={"column"}>
        <Flex justifyContent={"space-between"}>
          <Flex color={"black"} w={"200px"}>
            <SimpleText fontSize={12} color={"black"} text={"Nome"} />
          </Flex>
          <Flex color={"black"} w={"200px"}>
            <SimpleText fontSize={12} color={"black"} text={"Celular"} />
          </Flex>
          <Flex color={"black"} w={"200px"}>
            <SimpleText fontSize={12} color={"black"} text={"Email"} />
          </Flex>
          <Flex color={"black"} w={"200px"}>
            <SimpleText fontSize={12} color={"black"} text={"Data"} />
          </Flex>
          <Flex color={"black"} w={"200px"}>
            <SimpleText fontSize={12} color={"black"} text={"Hora"} />
          </Flex>
          <Flex color={"black"} w={"200px"}>
            <SimpleText fontSize={12} color={"black"} text={"Local"} />
          </Flex>
          <Flex cursor={"pointer"} onClick={() => console.log("EDITARE")} w={"100px"}></Flex>
        </Flex>
        {array &&
          array.map((e: any, key: any) => (
            <Flex key={key} justifyContent={"space-between"}>
              <Flex color={"black"} w={"200px"}>
                <SimpleText fontSize={12} fontWeight={"200"} color={"black"} text={e.nome} />
              </Flex>
              <Flex color={"black"} w={"200px"}>
                <SimpleText fontSize={12} fontWeight={"200"} color={"black"} text={e.celular} />
              </Flex>
              <Flex color={"black"} w={"200px"}>
                <SimpleText fontSize={12} fontWeight={"200"} color={"black"} text={e.email} />
              </Flex>
              <Flex color={"black"} w={"200px"}>
                <SimpleText fontSize={12} fontWeight={"200"} color={"black"} text={e.data} />
              </Flex>
              <Flex color={"black"} w={"200px"}>
                <SimpleText fontSize={12} fontWeight={"200"} color={"black"} text={e.horario} />
              </Flex>
              <Flex color={"black"} w={"200px"}>
                <SimpleText fontSize={12} fontWeight={"200"} color={"black"} text={e.local} />
              </Flex>
              <Flex w={"100px"} justifyContent={"space-between"}>
                <Icon
                  color={"black"}
                  cursor={"pointer"}
                  as={AiTwotoneEdit}
                  onClick={() => console.log("EDITARE")}
                />
                <Icon
                  color={"black"}
                  cursor={"pointer"}
                  as={BsTrashFill}
                  onClick={() => console.log("EXCLUIRE")}
                />
              </Flex>
            </Flex>
          ))}
      </Flex>
    </Flex>
  );
}
