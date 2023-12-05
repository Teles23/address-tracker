import { createContext } from "react";
import { UseGlobalValues } from "../types/details";

const initialContextValue: UseGlobalValues = {
  details: {
    ip: "",
    timezone: "",
    isp: "",
    location: "",
    lat: 0,
    lng: 0,
  },
  setDetails: () => {},
};

const GlobalContext = createContext<UseGlobalValues>(initialContextValue);
export default GlobalContext;
