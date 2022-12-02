import { Flex } from "@chakra-ui/react";
import { SimpleText } from "..";

interface Props {
  text: string;
  url?: string;
  link: boolean;
}
export default function SimpleLabelLink({ text, url, link }: Props) {
  return (
    <>
      <Flex w={"100%"} _hover={{ bg: "red" }}>
        <SimpleText text={text} fontSize={19} fontWeight={"bolder"} p={"8px"} color={"white"} />
      </Flex>
    </>
  );
}
