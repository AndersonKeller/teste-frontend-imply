import { StyledInput } from "./style";

interface iInputProps {
  label: string;
  require: boolean;
  type: "number" | "text" | "tel" | "email";
}

export function Input({ label, require, type }: iInputProps) {
  return (
    <StyledInput>
      <label className="textColor">
        {label}
        {require && <span>*</span>}
      </label>
      <input type={type} />
    </StyledInput>
  );
}
