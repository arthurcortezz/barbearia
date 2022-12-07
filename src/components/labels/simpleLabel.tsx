import { Link } from "@chakra-ui/react";

import { SimpleText } from "..";

interface Props {
  fontSize?: number;
  text: string;
  link: boolean;
  url?: string;
  onclick?: () => void;
}
export default function SimpleLabelLink({ onclick, text, url, link, fontSize }: Props) {
  return (
    <>
      {link ? (
        <Link onClick={onclick} isExternal _hover={{ underline: "none" }}>
          <SimpleText
            text={text}
            fontSize={fontSize ? fontSize : 19}
            fontWeight={"bolder"}
            p={"8px"}
            color={"white"}
          />
        </Link>
      ) : (
        <SimpleText text={text} fontSize={19} fontWeight={"bolder"} p={"8px"} color={"white"} />
      )}
    </>
  );
}
