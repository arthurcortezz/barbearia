import Head from "next/head";
import { useState } from "react";
import type { AppProps } from "next/app";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { ChakraProvider } from "@chakra-ui/react";

import "../styles/globals.css";
import { theme } from "../styles/theme";
import { GlobalContextProvider } from "../context/GlobalContext";
import { conta } from "../types";

function MyApp({ Component, pageProps }: AppProps) {
  const [usuario, setUsuario] = useState<conta | null>(null);
  return (
    <>
      <Head>
        <title>Barber Shop</title>
      </Head>
      <GlobalContextProvider setUsuario={setUsuario}>
        <ChakraProvider resetCSS={true} theme={theme}>
          <Component {...pageProps} />
          <ToastContainer theme="dark" />
        </ChakraProvider>
      </GlobalContextProvider>
    </>
  );
}

export default MyApp;
