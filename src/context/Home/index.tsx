import { createContext, ReactNode, useState, useEffect } from "react";
import * as Interfaces from "../../interfaces/Home";
import { FieldValue } from "react-hook-form";
import { baseApi } from "../../services/BaseApi";

export const HomeContext = createContext<Interfaces.HomeContextInterface>(
  {} as Interfaces.HomeContextInterface
);

export const HomeContextComponent = ({ children }: { children: ReactNode }) => {
  const [valueYouReceive, setValueYouReceive] =
    useState<Interfaces.valueYouReceiveInterface>({
      1: 0,
      15: 0,
      30: 0,
      90: 0,
    } as Interfaces.valueYouReceiveInterface);

  const HandleSubmitValue = (
    data: FieldValue<Interfaces.dataValueInterface>
  ) => {
    baseApi.post("", data).then((res) => {
      setValueYouReceive(res.data);
    });
  };

  return (
    <HomeContext.Provider value={{ HandleSubmitValue, valueYouReceive }}>
      {children}
    </HomeContext.Provider>
  );
};
