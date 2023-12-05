import { useState } from "react";
import { Details, UseGlobalValues } from "../types/details";

export function useGlobalValues(): UseGlobalValues {
  const [details, setDetails] = useState<Details>({
    ip: "",
    timezone: "",
    isp: "",
    location: "",
    lat: 0,
    lng: 0,
  });
  return {
    details,
    setDetails,
  };
}
