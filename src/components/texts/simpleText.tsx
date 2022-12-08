import { Text } from "@chakra-ui/react";

interface Props {
  align?: "center" | "left";
  text: string;
  fontSize: number;
  fontWeight?: string;
  p?: string;
  color?: string;
}
export default function SimpleText({ align, text, fontSize, fontWeight, p, color }: Props) {
  return (
    <Text
      align={align ? align : "center"}
      fontSize={fontSize}
      fontWeight={fontWeight ? fontWeight : "bolder"}
      p={p ? p : "0px"}
      m={"0px"}
      color={color ? color : "white"}>
      {text}
    </Text>
  );
}
