import styled from "styled-components";

export const StyledHome = styled.main`
  width: 100%;
  max-width: 500px;
  height: auto;
  background-color: var(--color-white);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  header {
    height: 150px;
    overflow: hidden;
    position: relative;
    z-index: 1;
    & img {
      width: 100%;
      object-fit: cover;
      border-radius: 8px;
      height: 100%;
      position: absolute;
      z-index: 0;
      overflow: hidden;
    }
  }
  section {
    background-color: var(--color-white);
    padding: 32px;
    color: var(--font-color);
    line-height: 26px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    gap: 60px;
    border-radius: 8px;
    .divMain {
      color: var(--color-white);
      background-color: var(--color-secundary100);
      margin: 0 auto;
      border-radius: 8px;
      padding: 32px;
      display: flex;
      width: 100%;
      gap: 16px;
      flex-direction: column;
      div {
        display: flex;
        flex-direction: column;
        gap: 8px;
        min-height: 150px;
      }
    }
  }
  @media (min-width: 700px) {
    main {
      width: 500px;
    }
  }
`;
