import { BaseInput } from "../../atoms/baseInput";
import { Conteiner } from "./style.js";

export const BoxInputs = ({
  textInput,
  setSaleValue,
  setPortionValue,
  setMdrValue,
}) => {

  switch (textInput) {
    case "sale":
      return (
        <Conteiner>
          <span>Informe o valor da venda *</span>
          <BaseInput
            // defaultValue="R$ 1.000,00"
            type="number"
            placeholder="Informe o Valor da venda *"
            onChange={(event) => setSaleValue(event.target.value)}
          />
        </Conteiner>
      );
    case "portion":
      return (
        <Conteiner>
          <span>Em quantas parcelas *</span>

          <BaseInput
            type="number"
            placeholder="Em quantas parcelas *"
            onChange={(event) => setPortionValue(event.target.value)}
          />
          <span className="span__text">Máximo de 12 parcelas</span>
        </Conteiner>
      );
    case "mdr":
      return (
        <Conteiner>
          <span>Informe o percentual de MDR *</span>
          <BaseInput
            type="number"
            placeholder="Informe o percentual de MDR *"
            onChange={(event) => setMdrValue(event.target.value)}
          />
        </Conteiner>
      );
    default:
      return <BaseInput />;
  }
};
