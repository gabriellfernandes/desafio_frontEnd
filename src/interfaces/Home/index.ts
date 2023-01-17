import { FieldValue } from "react-hook-form";

export interface HomeContextInterface {
  HandleSubmitValue: (data: FieldValue<dataValueInterface>) => void;
  valueYouReceive: valueYouReceiveInterface;
}

export interface dataValueInterface {
  amount: string;
  installments: string;
  mdr: string;
}

export interface valueYouReceiveInterface {
  1: number;
  15: number;
  30: number;
  90: number;
}
