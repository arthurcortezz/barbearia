import { Button, useMediaQuery } from "@chakra-ui/react";

interface Props {
  w?: string;
  mt?: string;
  color?: string;
  name: string;
  handleOnChange: () => void;
}
export default function SimpleButton({ w, mt, color, name, handleOnChange }: Props) {
  const [isLargerThan] = useMediaQuery("(min-width: 960px)");
  return (
    <Button
      w={w ? w : "100%"}
      mt={mt ? mt : "10px"}
      fontSize={isLargerThan ? 16 : 12}
      bg={"green.400"}
      color={"white"}
      bgColor={color}
      onClick={() => handleOnChange()}>
      {name}
    </Button>
  );
}
