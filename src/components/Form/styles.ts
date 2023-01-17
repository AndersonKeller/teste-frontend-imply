import styled from "styled-components";

export const StyledForm = styled.form`
  width: 100%;
  max-width: 440px;
  height: auto;
  background-color: var(--color-white);
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  div {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 16px;
  }
  button {
    width: 100%;
    background-color: var(--color-secundary100);
    color: var(--color-white);
    padding: 12px;
    font-weight: 700;
  }
  @media (min-width: 440px) {
    div fieldset {
      max-width: 46%;
    }
  }
`;
