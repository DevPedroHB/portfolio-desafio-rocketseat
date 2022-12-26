import styled from "styled-components";

export const CardBody = styled.div``;

export const CardTitle = styled.h1`
  font-size: var(--h1-font-size);
  margin-bottom: 1.5rem;
  font-weight: var(--font-bold);
`;

export const ExperienceItem = styled.li`
  margin-left: 2rem;

  h3 {
    font-size: var(--normal-font-size);
  }

  small {
    font-size: var(--smaller-font-size);
  }

  p {
    font-size: var(--small-font-size);
  }
`;

export const ExperienceList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
