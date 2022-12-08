import router from "next/router";
import { Flex } from "@chakra-ui/react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

interface Props {
  rota: string;
}
export default function PageBackButton({ rota }: Props) {
  return <Flex w={"40px"} h={"40px"} as={MdOutlineArrowBackIosNew} color={"white"} position={"absolute"} top={5} left={20} onClick={() => router.push(`${rota}`)} cursor={"pointer"} />;
}
