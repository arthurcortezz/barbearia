import router from "next/router";
import { Button, Flex, Image, useMediaQuery } from "@chakra-ui/react";

import { linksUrls } from "../../types";
import {
  NavbarContainer,
  SimpleLabelLink,
  SimpleText,
  BackgroundContainer,
  SimpleButton,
} from "../";

let linkList: Array<linksUrls> = [
  {
    url: "barbearia",
    text: "BARBEARIA",
  },
  { url: "produto", text: "PRODUTOS" },
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
    <BackgroundContainer>
      <Flex direction={"column"} mx={"10%"} h={"100%"} p={"10px"} align={"center"}>
        <NavbarContainer justify={"center"} w={"100%"}>
          {linkList?.map((e: any, key: any) =>
            e.image ? (
              isLargerThan && (
                <Image mx={"40px"} key={key} w={"70px"} h={"70px"} alt="logo" src="banner.png" />
              )
            ) : (
              <SimpleLabelLink
                fontSize={isLargerThan ? 16 : 8}
                key={key}
                link={true}
                url={e.url}
                text={e.text}
                onclick={() => router.push(`/${e.url}`)}
              />
            )
          )}
        </NavbarContainer>
        <Flex w={"100%"} direction={"column"} mt={"140px"}>
          <SimpleText fontSize={isLargerThan ? 20 : 16} text={"BARBEARIA BLACK JACK"} />
          {isLargerThan && (
            <SimpleText
              fontSize={isLargerThan ? 20 : 16}
              text={"Experiência, dedicação, amor e entrega a profissão."}
            />
          )}
          <SimpleButton
            h={"40px"}
            name={"AGENDE SEU HORARIO"}
            color={"yellow.400"}
            handleOnChange={() => router.push("agendamento")}
          />
        </Flex>
      </Flex>
      <Flex w={"100%"} align={"center"} direction={"column"}>
        <Flex w={"100%"} h={"100%"} justify={"center"}>
          <Flex
            bg={"black"}
            h={"100%"}
            w={"90%"}
            direction={"row"}
            justifyContent={"space-evenly"}
            p={isLargerThan ? "5px" : "2px"}>
            <Flex h={"100%"} direction={"column"} align={"center"}>
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
            <Flex h={"100%"} direction={"column"} align={"center"}>
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
            <Flex h={"100%"} direction={"column"} align={"center"}>
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
    </BackgroundContainer>
  );
}
