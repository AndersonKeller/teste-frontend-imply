import React from "react";
import InputMask from "react-input-mask";
import { StyledInput } from "./style";

interface iInputProps {
  label: string;
  require: boolean;
  type: "number" | "text" | "tel" | "email";
  register?: {};
  errorMsg?: string;
  mask?: string;
}

export function Input({
  label,
  require,
  type,
  register,
  mask,
  errorMsg,
}: iInputProps) {
  return (
    <StyledInput>
      <label className="textColor">
        {label}
        {require && <span>*</span>}
      </label>
      {mask ? (
        <>
          <InputMask {...register} mask={mask} />
          {errorMsg && <p>{errorMsg}</p>}
        </>
      ) : (
        <>
          <input type={type} {...register}></input>
          {errorMsg && <p>{errorMsg}</p>}
        </>
      )}
    </StyledInput>
  );
}
