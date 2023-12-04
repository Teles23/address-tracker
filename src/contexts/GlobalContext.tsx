import { createContext } from "react";
import { UseGlobalValues } from "../hooks/useGlobalValues";

const GlobalContext = createContext<UseGlobalValues>(undefined);
export default GlobalContext;
