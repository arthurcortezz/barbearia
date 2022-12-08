import { Flex } from "@chakra-ui/react";
import { SimpleText } from "../";

interface Props {
  text: string;
}
export default function TesteContainer({ text }: Props) {
  return (
    <Flex p={"5px"}>
      <SimpleText align={"left"} fontSize={18} text={text} />
    </Flex>
  );
}
