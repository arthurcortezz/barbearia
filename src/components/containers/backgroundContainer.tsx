import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";
import PageBackButton from "../buttons/pageBackButton";
import { SimpleText } from "../";

interface Props {
  children: ReactNode;
  rota?: string;
  pageName?: string;
}

export default function BackgroundContainer({ children, rota, pageName }: Props) {
  return (
    <Flex
      bg={"rgba(0,0,0,0.1) url('bg.jpg')"}
      h={"100vh"}
      position={"relative"}
      bgPosition={"50% 50%"}
      bgSize={"1000px cover"}
      overflow={"hidden"}>
      {rota ? (
        <Flex bg={"rgba(1,1,1,0.5)"} align={"center"} direction={"column"} p={"10px"}>
          <PageBackButton rota={rota} />
          <Flex
            mt={"50px"}
            w={"100%"}
            justifyContent={"center"}
            align={"center"}
            direction={"column"}>
            {pageName && <SimpleText fontSize={20} text={pageName} />}
            {children}
          </Flex>
        </Flex>
      ) : (
        <Flex
          h={"100vh"}
          w={"100%"}
          justifyContent={"center"}
          align={"center"}
          direction={"column"}>
          {children}
        </Flex>
      )}
    </Flex>
  );
}
