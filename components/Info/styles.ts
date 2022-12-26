import Link from "next/link";
import styled from "styled-components";

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const InfoData = styled(Link)`
  width: max-content;
  display: flex;
  gap: 1.25rem;

  svg {
    font-size: var(--h2-font-size);
  }

  span {
    font-weight: var(--font-regular);
  }
`;
