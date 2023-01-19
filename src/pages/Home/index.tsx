import { Anticipation } from "../../components/Anticipation";
import { Calculator } from "../../components/Calculator";
import * as Element from "./style";

export const Home = () => {
  return (
    <Element.HomeContainer>
      <Element.FormContainer>
        <Calculator />
        <Anticipation />
      </Element.FormContainer>
    </Element.HomeContainer>
  );
};
