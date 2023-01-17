import styled from "styled-components";

export const StyledHome = styled.main`
  width: 100%;
  max-width: 440px;
  height: auto;
  background-color: var(--color-white);
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  gap: 16px;
  header {
    height: 120px;
    object-fit: cover;
    overflow: hidden;
    position: relative;
    z-index: 1;
    & img {
      width: 100%;
      border-radius: 8px;
      height: 150%;
      position: absolute;
      z-index: 0;
      overflow: hidden;
    }
  }
  section {
    background-color: var(--color-white);
  }
`;
