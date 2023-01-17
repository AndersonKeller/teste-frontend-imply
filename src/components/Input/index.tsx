import { useState } from "react";
import InputMask from "react-input-mask";
import { apiCep } from "../../services/api/api";

import { StyledInput } from "./style";

interface iInputProps {
  label: string;
  require: boolean;
  type: "number" | "text" | "tel" | "email";
  register: {};
  errorMsg?: string;
  mask?: string;
  value?: string;
  onChangeCep?: boolean;
}

export function Input({
  label,
  require,
  type,
  register,
  mask,
  errorMsg,
  onChangeCep,
}: iInputProps) {
  const [loading, setLoading] = useState(false);
  const [cepApi, setCepApi] = useState("");

  const [city, setCity] = useState("");

  function handleCepApi(value: string) {
    setCepApi(value.replace("-", ""));

    async function getCepApi() {
      try {
        setLoading(true);

        const res = await apiCep.get(`${cepApi}/json`);
        console.log(res.data);
        setCity(res.data.localidade);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    cepApi.length > 7 && getCepApi();
  }
  return loading ? (
    <>Carregando</>
  ) : (
    <StyledInput>
      <label className="textColor">
        {label}
        {require && <span>*</span>}
      </label>
      {mask ? (
        <>
          <InputMask ref={label} {...register} mask={mask} />
          {errorMsg && <p>{errorMsg}</p>}
        </>
      ) : (
        <>
          {!onChangeCep ? (
            <>
              <input type={type} {...register} />
              {errorMsg && <p>{errorMsg}</p>}
            </>
          ) : (
            <>
              <input
                type={type}
                {...register}
                onBlur={(e) => handleCepApi(e.target.value)}
              />
              {errorMsg && <p>{errorMsg}</p>}
            </>
          )}
        </>
      )}
    </StyledInput>
  );
}
