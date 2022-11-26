import { useState } from "react";
import { Form } from "../components/tampletes/form";
import { Conteiner } from "../style";
import { InformationPoster } from "../components/tampletes/informationPoster";

export const HomePage = () => {
  const [paymentTomorrow, setPaymentTomorrow] = useState(0);
  const [payIn15Days, setPayIn15Days] = useState(0);
  const [payIn30Days, setPayIn30Days] = useState(0);
  const [payIn90Days, setPayIn90Days] = useState(0);

  const [saleValue, setSaleValue] = useState();
  const [portionValue, setPortionValue] = useState();
  const [mdrValue, setMdrValue] = useState();

  const [errors, setErrors] = useState("");

  const [data, setData] = useState({});

  return (
    <Conteiner>
      <div className="div__position">
        <Form
          setPaymentTomorrow={setPaymentTomorrow}
          setPayIn15Days={setPayIn15Days}
          setPayIn30Days={setPayIn30Days}
          setPayIn90Days={setPayIn90Days}
          setSaleValue={setSaleValue}
          setPortionValue={setPortionValue}
          setMdrValue={setMdrValue}
          saleValue={saleValue}
          portionValue={portionValue}
          mdrValue={mdrValue}
          setData={setData}
          setErrors={setErrors}
        />
        <InformationPoster
          paymentTomorrow={paymentTomorrow}
          payIn15Days={payIn15Days}
          payIn30Days={payIn30Days}
          payIn90Days={payIn90Days}
          errors={errors}
          data={data}
        />
      </div>
    </Conteiner>
  );
};
