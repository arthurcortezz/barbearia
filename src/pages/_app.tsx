import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { theme } from "../styles/theme";
import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import Head from "next/head";
import { GlobalContextProvider } from "../context/GlobalContext";
import { conta } from "../types";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [usuario, setUsuario] = useState<conta | null>(null);
  return (
    <>
      <Head>
        <title>Barber Shop</title>
      </Head>
      <GlobalContextProvider setUsuario={setUsuario}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
          <ToastContainer />
        </ChakraProvider>
      </GlobalContextProvider>
    </>
  );
}

export default MyApp;
