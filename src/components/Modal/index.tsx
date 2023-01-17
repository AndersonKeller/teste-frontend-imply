import { Link } from "react-router-dom";
import { StyledModal, StyledModalWrapper } from "./style";

export function ModalWrapper() {
  return (
    <StyledModalWrapper>
      <StyledModal>
        <h2 className="titleColor">Cadastro realizado com sucesso</h2>
        <Link to={"/home"}>OK</Link>
      </StyledModal>
    </StyledModalWrapper>
  );
}
