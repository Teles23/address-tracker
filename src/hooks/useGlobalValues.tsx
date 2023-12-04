import { Dispatch, SetStateAction, useState } from "react";
import Details from "../types/details";

export type UseGlobalValues =
  | {
      details: Details;
      setDetails: Dispatch<SetStateAction<Details>>;
    }
  | undefined;

export function useGlobalValues(): UseGlobalValues {
  const [details, setDetails] = useState<Details>({
    ip: "",
    timezone: "",
    isp: "",
    location: "",
  });
  return {
    details,
    setDetails,
  };
}
