import { ReactNode } from "react";
import { useGlobalValues } from "../hooks/useGlobalValues";
import GlobalContext from "./GlobalContext";

type Props = {
  children: ReactNode;
};

function GlobalContextProvider({ children }: Readonly<Props>) {
  const values = useGlobalValues();
  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
}

export default GlobalContextProvider;
