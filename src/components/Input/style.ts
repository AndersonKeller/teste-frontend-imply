import styled from "styled-components";

export const StyledInput = styled.fieldset`
  height: auto;
  display: flex;
  flex-direction: column;
  border: none;
  width: 100%;
  span {
    color: var(--color-secundary100);
  }
  input {
    height: 45px;
    border: 1px solid var(--color-primary100);
    border-radius: 8px;
    width: 100%;
    padding-left: 8px;
  }
  p {
    color: var(--color-negative);
  }
`;
