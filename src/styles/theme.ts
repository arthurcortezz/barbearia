import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    primary: "#57B3AD",
    secondary: "#EDF2F7",
    background: {
      auth: "#EDF2F7",
      blank: "white",
      commom: "#EDF2F7",
    },
    card: {
      auth: "#57B3AD",
      auth2: "#4FD1C5",
      primary: "#57B3AD",
    },
    text: {
      main: "black",
    },
    border: {
      main: "gray",
    },
  },

  fonts: {
    heading: "Lexend",
    body: "Roboto",
    Option: "Roboto",
  },

  styles: {
    global: {
      body: {
        backgroundColor: "gray.100",
        color: "gray.50",
      },
    },
  },
  // components: {
  //   BottomNavigation,
  // },
});
