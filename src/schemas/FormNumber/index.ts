import * as yup from "yup";

export const formSchema = yup.object().shape({
  amount: yup.number().required().typeError('Digite um valor').min(1000, "Minimo é de 1000 R$"),
  installments: yup.number().required().typeError('Digite um valor').min(1, "Minimo de 1 parcela").max(12, "Maximo de 12 parcelas"),
  mdr: yup.number().required().typeError('Digite um valor').min(1, "minimo de 1%").max(100, "maximo de 100%"),
});
