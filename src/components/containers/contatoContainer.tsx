import { Flex, useMediaQuery } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function ContatoContainer({ children }: Props) {
  const [isLargerThan] = useMediaQuery("(min-width: 960px)");
  return (
    <Flex
      mx={"5px"}
      w={isLargerThan ? "50%" : "100%"}
      justifyContent={"center"}
      direction={"column"}
      bg={"rgba(400,400,400,0.1)"}
      borderRadius={"5px"}
      py={"20px"}>
      {children}
    </Flex>
  );
}
