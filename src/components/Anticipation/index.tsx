import { useContext } from "react";
import { HomeContext } from "../../context/Home";
import * as Element from "./style";

export const Anticipation = () => {

    const  {valueYouReceive} = useContext(HomeContext) 

  return (
    <Element.ContainerAnticipation>
      <h2 className="containerAnticipation__title">Você Receberá</h2>

      <p className="containerAnticipation__paragraph">
        Amanhã: <span className="containerAnticipation__value">R$ {valueYouReceive[1].toFixed(2)}</span>
      </p>

      <p className="containerAnticipation__paragraph">
        Em 15 dias:{" "}
        <span className="containerAnticipation__value">R$ {valueYouReceive[15].toFixed(2)}</span>
      </p>

      <p className="containerAnticipation__paragraph">
        Em 30 dias:{" "}
        <span className="containerAnticipation__value">R$ {valueYouReceive[30].toFixed(2)}</span>
      </p>

      <p className="containerAnticipation__paragraph">
        Em 90 dias:{" "}
        <span className="containerAnticipation__value">R$ {valueYouReceive[90].toFixed(2)}</span>
      </p>
    </Element.ContainerAnticipation>
  );
};
