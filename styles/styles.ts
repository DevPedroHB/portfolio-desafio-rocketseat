import styled from "styled-components";

export const Main = styled.main`
  max-width: 90rem;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 2.5rem;
  margin: 2rem auto;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
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
