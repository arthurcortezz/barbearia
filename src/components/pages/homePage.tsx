import router from "next/router";
import { Button, Flex, Image, useMediaQuery } from "@chakra-ui/react";

import { linksUrls } from "../../types";
import { NavbarContainer, SimpleLabelLink, SimpleText } from "../";

let linkList: Array<linksUrls> = [
  {
    url: "barbearia",
    text: "BARBEARIA",
  },
  { url: "servicos", text: "SERVIÇOS" },
  { url: "equipe", text: "EQUIPE" },
  { url: "clientes", text: "CLIENTES" },
  { url: "", text: "", image: true },
  { url: "midia", text: "MÍDIA" },
  { url: "agendamento", text: "AGENDAMENTO" },
  { url: "conta", text: "CONTA" },
  { url: "contato", text: "CONTATO" },
];
export default function HomePage() {
  const [isLargerThan] = useMediaQuery("(min-width: 960px)");
  return (
    <Flex direction={"column"} bg={"rgba(0,0,0,0.1) url('bg.jpg')"} h={"100vh"} overflow={"hidden"}>
      <Flex
        direction={"row"}
        mx={"10%"}
        justifyContent={"space-between"}
        p={"10px"}
        align={"center"}>
        <NavbarContainer justify={"center"} w={"100%"}>
          {linkList?.map((e: any, key: any) =>
            e.image ? (
              <Image
                key={key}
                w={isLargerThan ? "140" : "70"}
                h={isLargerThan ? "140" : "70"}
                alt="logo"
                src="banner.png"
                mx={"10px"}
              />
            ) : (
              isLargerThan && (
                <SimpleLabelLink
                  key={key}
                  link={true}
                  url={e.url}
                  text={e.text}
                  onclick={() => router.push(`/${e.url}`)}
                />
              )
            )
          )}
        </NavbarContainer>
      </Flex>
      <Flex py={"6%"} align={"center"} direction={"column"}>
        <SimpleText fontSize={isLargerThan ? 23 : 18} text={"BARBEARIA BLACK JACK"} />
        {isLargerThan && (
          <SimpleText
            fontSize={isLargerThan ? 23 : 18}
            text={"Experiência, dedicação, amor e entrega a profissão."}
          />
        )}
        <Button
          mt={"40px"}
          fontSize={isLargerThan ? 16 : 12}
          bg={"yellow.400"}
          color={"black"}
          onClick={() => router.push("agendamento")}>
          AGENDE SEU HORARIO
        </Button>
      </Flex>
      <Flex mt={isLargerThan ? "55px" : "100px"} w={"100%"} h={"100%"} justify={"center"}>
        <Flex
          bg={"black"}
          w={"90%"}
          direction={"row"}
          justifyContent={"space-evenly"}
          p={isLargerThan ? "5px" : "2px"}>
          <Flex direction={"column"} align={"center"}>
            <SimpleText
              fontSize={isLargerThan ? 14 : 10}
              p={isLargerThan ? "10px" : "6px"}
              text="HORARIO DE FUNCIONAMENTO"
            />
            <SimpleText
              fontSize={isLargerThan ? 12 : 8}
              text="Segunda a sexta das 08:00 as 18:00"
            />
            <SimpleText fontSize={isLargerThan ? 12 : 8} text="Sábado das 08:00 as 12:00" />
          </Flex>
          <Flex direction={"column"} align={"center"}>
            <SimpleText
              fontSize={isLargerThan ? 14 : 10}
              p={isLargerThan ? "10px" : "6px"}
              text="LOCALIZAÇÃO"
            />
            <SimpleText
              fontSize={isLargerThan ? 12 : 8}
              text="Rua Quintino Bocaiúva, 1481, Pajuçara"
            />
            <SimpleText
              fontSize={isLargerThan ? 12 : 8}
              text="(Em frente ao Tão Bom Galeto) Localizado na"
            />
            <SimpleText fontSize={isLargerThan ? 12 : 8} text="Galeria Cittá Uffici, loja 05" />
          </Flex>
          <Flex direction={"column"} align={"center"}>
            <SimpleText
              fontSize={isLargerThan ? 14 : 10}
              p={isLargerThan ? "10px" : "6px"}
              text="AGENDE SEU HORARIO"
            />
            <SimpleText fontSize={isLargerThan ? 12 : 8} text="(82) 3205-0415" />
            <SimpleText fontSize={isLargerThan ? 12 : 8} text="Estacionamento gratuito" />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
