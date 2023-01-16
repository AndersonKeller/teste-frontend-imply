import { StyledForm } from "./styles";

interface iFormProps {
  children: React.ReactNode;
}
export function Form({ children }: iFormProps) {
  return <StyledForm>{children}</StyledForm>;
}
