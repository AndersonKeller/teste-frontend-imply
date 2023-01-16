import { StyledForm } from "./styles";

interface iFormProps {
  children: React.ReactNode;
  onSubmit: () => void;
  noValidate: boolean;
}
export function Form({ children, onSubmit, noValidate }: iFormProps) {
  return (
    <StyledForm onSubmit={onSubmit} noValidate={noValidate}>
      {children}
    </StyledForm>
  );
}
