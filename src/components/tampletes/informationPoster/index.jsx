export const InformationPoster = ({
  paymentTomorrow,
  payIn15Days,
  payIn30Days,
  payIn90Days,
  errors,
  data
}) => {
  return (
    <>
      {errors === "error" && data?.amount < 1000 ? (
        <p className="errors">
          Valor muito baixo <br />
          para simulação só valores <br /> acima de R$1000,00
        </p>
      ) : (
        <div>
          <h2>Você receberá</h2>
          <p>
            Amanhã:{" "}
            <b>
              {paymentTomorrow?.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 2,
              })}
            </b>
          </p>
          <p>
            Em 15 dias:{" "}
            <b>
              {payIn15Days?.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 2,
              })}
            </b>
          </p>
          <p>
            Em 30 dias:{" "}
            <b>
              {payIn30Days?.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 2,
              })}
            </b>
          </p>
          <p>
            Em 90 dias:{" "}
            <b>
              {payIn90Days?.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 2,
              })}
            </b>
          </p>
        </div>
      )}
    </>
  );
};
