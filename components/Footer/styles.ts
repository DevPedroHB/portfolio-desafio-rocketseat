import styled from "styled-components";

export const FooterBody = styled.footer`
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;

  span {
    font-weight: var(--font-regular);

    svg {
      color: ${(props) => props.theme.colors.bgTechs};
      /* margin: 0 0.5rem; */
    }

    a:hover {
      color: ${(props) => props.theme.colors.textColorAlt};
    }
  }
`;
