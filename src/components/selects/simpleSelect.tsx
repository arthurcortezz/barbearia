import { Flex, InputGroup, InputProps, Select, SelectProps } from "@chakra-ui/react";
import { SimpleText } from "..";
interface list {
  label: string;
  value: string;
}
interface Props extends SelectProps {
  name: string;
  label: string;
  value: string;
  opcoes?: any;
}
export default function Input({ opcoes, name, value, label, onChange }: Props) {
  const handleOnChange = (e: any) => {
    onChange && onChange(e);
  };
  return (
    <Flex direction={"column"} w={"100%"} textAlign={"left"} p={"10px"}>
      <SimpleText fontSize={14} text={name} color={"black"} />
      <InputGroup>
        <Select
          value={value}
          bg="white"
          color="black"
          onChange={handleOnChange}
          placeholder={label}>
          {opcoes &&
            opcoes.map((e: any, key: any) => {
              return (
                <option key={key} value={e.value}>
                  {e.label}
                </option>
              );
            })}
        </Select>
      </InputGroup>
    </Flex>
  );
}
