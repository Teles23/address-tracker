import { Dispatch, ReactNode, SetStateAction } from "react";

export type Details = {
  ip: string;
  timezone: string;
  isp: string;
  location: string;
  lat: number;
  lng: number;
};

export type Props = {
  children: ReactNode;
};

export type UseGlobalValues = {
  details: Details;
  setDetails: Dispatch<SetStateAction<Details>>;
};
