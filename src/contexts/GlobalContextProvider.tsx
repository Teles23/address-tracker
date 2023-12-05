import { useGlobalValues } from "../hooks/useGlobalValues";
import { Props } from "../types/details";
import GlobalContext from "./GlobalContext";

function GlobalContextProvider({ children }: Readonly<Props>) {
  const values = useGlobalValues();
  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
}

export default GlobalContextProvider;
