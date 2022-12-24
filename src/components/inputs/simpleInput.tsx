import {
  Flex,
  Input as ChakraInput,
  InputGroup,
  Text,
  InputProps,
  useMediaQuery,
} from "@chakra-ui/react";
import ReactInputMask from "react-input-mask";
import { SimpleText } from "..";
interface Props extends InputProps, InputProps {
  name: string;
  label: string;
  value: string;
  type?: string;
  mask?: "(99) 9 9999-9999";
}
export default function Input({ type, name, value, label, mask, onChange }: Props) {
  const [isLargerThan] = useMediaQuery("(min-width: 960px)");
  const handleOnChange = (e: any) => {
    onChange && onChange(e);
  };
  return (
    <Flex direction={"column"} w={"100%"} textAlign={"left"} p={"10px"}>
      <SimpleText fontSize={14} text={name} color="white" />
      <InputGroup>
        <ChakraInput
          as={ReactInputMask}
          mask={mask ?? ""}
          maskChar={null}
          h={isLargerThan ? "40px" : "25px"}
          type={type}
          value={value}
          borderColor={"black"}
          focusBorderColor={"gray.600"}
          bg="white"
          color="black"
          onChange={handleOnChange}
          placeholder={label}
        />
      </InputGroup>
    </Flex>
  );
}
