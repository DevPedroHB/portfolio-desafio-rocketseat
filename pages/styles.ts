import styled from "styled-components";

export const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 3fr;
  padding: 2.5rem;
  gap: 2.5rem;
`;

export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
