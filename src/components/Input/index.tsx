import { StyledInput } from "./style";

interface iInputProps {
  label: string;
  require: boolean;
}

export function Input({ label, require }: iInputProps) {
  return (
    <StyledInput>
      <label className="textColor" htmlFor="">
        {label}
        {require && <span>*</span>}
      </label>
      <input type="text" />
    </StyledInput>
  );
}
