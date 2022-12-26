import styled from "styled-components";

interface CardBodyProps {
  flex?: boolean;
}

export const CardBody = styled.div<CardBodyProps>`
  ${(props) =>
    props.flex &&
    `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `}
  width: 100%;
  background-color: ${(props) => props.theme.colors.bgCards};
  border-radius: 1.25rem;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  padding: 2rem;

  &:hover {
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
  }
`;
