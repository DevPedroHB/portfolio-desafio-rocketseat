import styled from "styled-components";

export const PaginateBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    row-gap: 10rem;

    li {
      list-style: none;

      a {
        font-size: var(--small-font-size);
        cursor: pointer;
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

  @media screen and (max-width: 768px) {
    ul {
      gap: 0.5rem;

      li {
        a {
          font-size: var(--smaller-font-size);
        }
      }
    }
  }
`;
