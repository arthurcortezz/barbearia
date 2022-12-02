import router from "next/router";
import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { SimpleText } from "../../components";
import { AgendamentoController } from "../../controllers";

export default function AgendamentoPage() {
  const [array, setArray] = useState<any>();

  const listAll = async () => {
    const list = await AgendamentoController.listarAgendamento();
    const obj = JSON.stringify(list);
    const contact = JSON.parse(obj);
    setArray(contact);
  };

  useEffect(() => {
    listAll();
  }, [array]);

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
            </Flex>
          ))}
      </Flex>
    </Flex>
  );
}
