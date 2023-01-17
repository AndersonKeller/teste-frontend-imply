import { useContext, useState } from "react";
import InputMask from "react-input-mask";
import { CepContext } from "../../context/CepContext";
import { apiCep } from "../../services/api/api";

import { StyledInput } from "./style";

interface iInputProps {
  label: string;
  require: boolean;
  type: "number" | "text" | "tel" | "email";
  register: {};
  errorMsg?: string;
  mask?: string;
  onchangeCep?: boolean;
  value?: string;
}

export function Input({
  label,
  require,
  type,
  register,
  mask,
  onchangeCep,
  errorMsg,
  value,
}: iInputProps) {
  const [inputValue, setInputValue] = useState("");

  const {
    setCity,
    setDistrict,
    setStreet,
    setNumber,
    messageCpf,
    messagePhone,
  } = useContext(CepContext);

  function handleCepApi(data: string) {
    const cepApi = data.replace("-", "");
    console.log(cepApi);

    async function getCepApi() {
      try {
        const res = await apiCep.get(`${cepApi}/json`);
        console.log(res.data);
        if (!res.data.erro) {
          setCity(res.data.localidade);
          setDistrict(res.data.bairro);
          setStreet(res.data.logradouro);
          setNumber(res.data.gia);
        } else {
          setCity("");
          setDistrict("");
          setStreet("");
          setNumber("");
        }
      } catch (error) {
        console.error(error);
      } finally {
      }
    }
    cepApi.length > 7 && getCepApi();
  }

  return (
    <StyledInput>
      <label className="textColor">
        {label}
        {require && <span> *</span>}
      </label>
      {mask ? (
        <>
          {onchangeCep ? (
            <>
              <InputMask
                ref={label}
                {...register}
                mask={mask}
                onBlur={(e) => handleCepApi(e.target.value)}
              />
              {errorMsg && <p>{errorMsg}</p>}
            </>
          ) : (
            <>
              <InputMask ref={label} {...register} mask={mask} />
              {errorMsg && <p>{errorMsg}</p>}
              {label === "CPF"
                ? messageCpf && <p>{messageCpf}</p>
                : messagePhone && <p>{messagePhone}</p>}
            </>
          )}
        </>
      ) : (
        <>
          <input
            type={type}
            {...register}
            value={value ? value : inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          {errorMsg && <p>{errorMsg}</p>}
        </>
      )}
    </StyledInput>
  );
}
