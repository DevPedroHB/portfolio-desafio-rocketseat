import styled from "styled-components";

export const IssuesBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  img {
    border-radius: 50%;
  }

  a:hover {
    text-decoration: none;
  }
`;

export const CardBody = styled.div`
  display: flex;
  gap: 2rem;
`;

export const CardData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.div`
  p {
    font-size: var(--normal-font-size);
    font-weight: var(--font-bold);
    margin-bottom: 0.5rem;
  }

  small {
    font-size: var(--smaller-font-size);
    font-weight: var(--font-regular);
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  span {
    font-size: var(--small-font-size);
    font-weight: var(--font-regular);
  }
`;

export const Labels = styled.div`
  display: flex;
  gap: 1rem;
  font-size: var(--smaller-font-size);
  font-weight: var(--font-regular);
`;
