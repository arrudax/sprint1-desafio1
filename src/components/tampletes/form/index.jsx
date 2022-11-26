import { useEffect } from "react";
import { BoxInputs } from "../../molecule/boxInputs/index.jsx";
import { Api } from "../../../service";

export const Form = ({
  setPaymentTomorrow,
  setPayIn15Days,
  setPayIn30Days,
  setPayIn90Days,
  setSaleValue,
  setPortionValue,
  setMdrValue,
  saleValue,
  portionValue,
  mdrValue,
  setData,
  setErrors,
}) => {
  useEffect(() => {
    if (
      mdrValue !== undefined &&
      portionValue !== undefined &&
      saleValue !== undefined
    ) {
      const data = {
        amount: saleValue,
        installments: portionValue,
        mdr: mdrValue,
        days: [1, 15, 30, 90],
      };
      setData(data);
      data.amount >= 1000
        ? (async () =>
            await Api.installments(data).then((resp) => {
              setPaymentTomorrow(resp.paymentTomorrow);
              setPayIn15Days(resp.payIn15Days);
              setPayIn30Days(resp.payIn30Days);
              setPayIn90Days(resp.payIn90Days);
            }))()
        : (async () =>
            await Api.internalServerError(data).then((resp) =>
              setErrors("error")
            ))();
    }
  }, [
    mdrValue,
    portionValue,
    saleValue,
    setData,
    setErrors,
    setPayIn15Days,
    setPayIn30Days,
    setPayIn90Days,
    setPaymentTomorrow,
  ]);

  return (
    <>
      <div>
        <h1>Simule sua Antecipação</h1>
        <BoxInputs textInput="sale" setSaleValue={setSaleValue} />
        <BoxInputs textInput="portion" setPortionValue={setPortionValue} />
        <BoxInputs textInput="mdr" setMdrValue={setMdrValue} />
      </div>
    </>
  );
};
