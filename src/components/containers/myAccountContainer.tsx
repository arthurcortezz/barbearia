import { Flex, Icon } from "@chakra-ui/react";
import { AiTwotoneEdit } from "react-icons/ai";

export default function MyAccountContainer() {
  return (
    <Flex position={"absolute"} top={0} right={0}>
      <Icon as={AiTwotoneEdit} h={"30px"} w={"30px"} />
    </Flex>
  );
}
