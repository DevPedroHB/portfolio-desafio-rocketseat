import styled from "styled-components";

export const PaginateBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  ul {
    display: flex;
    gap: 0.75rem;

    li {
      list-style: none;

      a {
        cursor: pointer;
        width: max-content;
        background-color: ${(props) => props.theme.colors.bgCards};
        border-radius: 1.25rem;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
        padding: 0.5rem;

        &:hover {
          box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
          text-decoration: none;
        }

        &.active__page {
          background-color: ${(props) => props.theme.colors.bgCardsAlt};
        }
      }
    }
  }
`;
