import { createContext, ReactNode, useEffect, useState } from "react";
import { conta } from "../types";

interface IGlobalContext {
  user: conta | null;
  setUsuario: (user: conta | null) => void;
}

let GlobalContext = createContext({} as IGlobalContext);

interface GlobalContextProviderProps {
  children: ReactNode;
  setUsuario: (user: conta | null) => void;
}

const GlobalContextProvider = (props: GlobalContextProviderProps) => {
  const [user, setUsuario] = useState<conta | null>(null);

  return (
    <GlobalContext.Provider
      value={{
        user,
        setUsuario,
      }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export { GlobalContextProvider, GlobalContext };
