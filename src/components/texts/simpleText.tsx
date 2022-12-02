import { Text } from "@chakra-ui/react";

interface Props {
  text: string;
  fontSize: number;
  fontWeight?: string;
  p?: string;
  color?: string;
}
export default function SimpleText({ text, fontSize, fontWeight, p, color }: Props) {
  return (
    <Text fontSize={fontSize} fontWeight={fontWeight ? fontWeight : "bolder"} p={p ? p : "0px"} color={color ? color : "white"}>
      {text}
    </Text>
  );
}
