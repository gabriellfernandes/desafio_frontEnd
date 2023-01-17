import * as Element from "./style";
import * as Interfaces from "../../interfaces/Home";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../schemas/FormNumber";
import { useContext } from "react";
import { HomeContext } from "../../context/Home";


export const Calculator = () => {
  const {HandleSubmitValue} = useContext(HomeContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Interfaces.dataValueInterface>({ resolver: yupResolver(formSchema), shouldFocusError: false });

  return (
    <Element.ContainerCalculator>
      <h2 className="containerCalculator__title">Simule sua Antecipação</h2>

      <Element.ContainerForm onChange={handleSubmit(HandleSubmitValue)}>
        <Element.ContainerInput>
          <label
            className="containerInput__label"
            htmlFor="amount"
            key={"saleValue__label"}
          >
            Informe o valor da venda *
          </label>
          <input
            type="number"
            placeholder="Valor da venda"
            key={"saleValue__input"}
            className={"containerInput__input"}
            {...register("amount")}
          />
          {errors.amount && <span className="">{errors.amount.message}</span>}
        </Element.ContainerInput>
        <Element.ContainerInput>
          <label
            className="containerInput__label"
            htmlFor="installments"
            key={"parcel__label"}
          >
            Em quantas parcelas *
          </label>
          <input
            type="number"
            placeholder="Quantas parcelas"
            key={"parcel__input"}
            className={"containerInput__input"}
            {...register("installments")}
          />
          {errors.installments && <span className="">{errors.installments.message}</span>}
        </Element.ContainerInput>
        <Element.ContainerInput>
          <label
            className="containerInput__label"
            htmlFor="mdr"
            key={"percentageMDR__label"}
          >
            Informe o percentual de MDR *
          </label>
          <input
            type="number"
            placeholder="Valor da venda"
            key={"percentageMDR__input"}
            className={"containerInput__input"}
            {...register("mdr")}
          />
          {errors.mdr && <span className="">{errors.mdr.message}</span>}
        </Element.ContainerInput>
      </Element.ContainerForm>
    </Element.ContainerCalculator>
  );
};
