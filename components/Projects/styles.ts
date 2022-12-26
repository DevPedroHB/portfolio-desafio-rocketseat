import styled from "styled-components";

export const ProjectsBody = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  a {
    display: flex;

    &:hover {
      text-decoration: none;
    }
  }
`;

export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  h3 {
    font-size: var(--normal-font-size);
    font-weight: var(--font-bold);
  }
`;

export const CardBody = styled.p`
  font-weight: var(--font-regular);
  font-size: var(--small-font-size);
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  font-size: var(--smaller-font-size);
  font-weight: var(--font-regular);
`;

export const Reactions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`;

export const Language = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  div {
    width: 0.938rem;
    height: 0.938rem;
    border: 0.2rem solid #837e9f;
    border-radius: 50%;
    background-color: #e7de79;
  }
`;
