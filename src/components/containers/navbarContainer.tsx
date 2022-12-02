import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  w?: string;
  h?: string;
  justify?: string;
}
export default function NavbarContainer({ children, w, h, justify }: Props) {
  return (
    <Flex w={w} h={h} justify={justify} align={"center"}>
      {children}
    </Flex>
  );
}
