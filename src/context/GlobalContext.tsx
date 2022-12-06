import { createContext, ReactNode, useEffect, useState } from "react";

interface IGlobalContext {
  user: number | null;
  setUsuario: (user: number | null) => void;
}

let GlobalContext = createContext({} as IGlobalContext);

interface GlobalContextProviderProps {
  children: ReactNode;
  setUsuario: (user: number | null) => void;
}

const GlobalContextProvider = (props: GlobalContextProviderProps) => {
  const [user, setUsuario] = useState<number | null>(null);

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
