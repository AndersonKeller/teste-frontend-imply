import { StyledForm } from "./styles";

interface iFormProps {
  children: React.ReactNode;
  onSubmit: () => void;
}
export function Form({ children, onSubmit }: iFormProps) {
  return (
    <StyledForm onSubmit={onSubmit} noValidate>
      {children}
    </StyledForm>
  );
}
