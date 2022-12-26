import styled from "styled-components";

export const CardTitle = styled.h1`
  font-size: var(--h1-font-size);
  margin-bottom: 1.5rem;
  font-weight: var(--font-bold);
`;

export const CardBody = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  span {
    text-align: center;
    background-color: ${(props) => props.theme.colors.bgTechs};
    padding: 0.35rem;
    border-radius: 1.875rem;
    color: #000;
    font-weight: var(--font-bold);
    text-transform: uppercase;
    font-size: var(--smaller-font-size);
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.colors.bgTechsAlt};
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    }
  }
`;
