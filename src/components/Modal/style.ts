import styled from "styled-components";

export const StyledModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const StyledModal = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 440px;
  height: 200px;
  border-radius: 8px;
  background-color: var(--color-white);
  padding: 16px;
  gap: 16px;
  a {
    text-decoration: none;
    width: 80%;
    margin: 0 auto;
    border-radius: 8px;
    text-align: center;
    padding: 8px 16px;
    background-color: var(--color-primary100);
    color: var(--color-white);
  }
`;
