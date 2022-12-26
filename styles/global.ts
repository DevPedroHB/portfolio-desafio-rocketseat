import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  /*==================== VARIABLES CSS ====================*/
  :root {
    --header-height: 3rem;
    /*========== Font and typography ==========*/
    --body-font: 'Merriweather Sans', sans-serif;
    /* .5rem = 8px, 1rem = 16px, 1.5rem = 24px ... */
    --big-font-size: 2rem;
    --h1-font-size: 1.5rem;
    --h2-font-size: 1.25rem;
    --h3-font-size: 1.125rem;
    --normal-font-size: .938rem;
    --small-font-size: .813rem;
    --smaller-font-size: .75rem;
    /*========== Font weight ==========*/
    --font-regular: 400;
    --font-medium: 500;
    --font-semi-bold: 600;
    --font-bold: 700;
    /*========== Margens Bottom ==========*/
    /* .25rem = 4px, .5rem = 8px, .75rem = 12px ... */
    --mb-0-25: .25rem;
    --mb-0-5: .5rem;
    --mb-0-75: .75rem;
    --mb-1: 1rem;
    --mb-1-5: 1.5rem;
    --mb-2: 2rem;
    --mb-2-5: 2.5rem;
    --mb-3: 3rem;
    /*========== z index ==========*/
    --z-tooltip: 10;
    --z-fixed: 100;
    --z-modal: 1000;
  }

  /*==================== BASE ====================*/
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    transition: all .2s;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: var(--body-font);
    font-size: var(--normal-font-size);
    font-weight: var(--font-medium);
    background-color: ${(props) => props.theme.colors.bodyBgColor};
    color: ${(props) => props.theme.colors.textColor};
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.textColor};

    &:hover {
      text-decoration: underline;
      color: ${(props) => props.theme.colors.textColorAlt};
    }
  }

  ::-webkit-scrollbar {
    width: .60rem;
    background-color: ${(props) => props.theme.colors.scrollBarColor};
    border-radius: .5rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.scrollThumbColor};
    border-radius: .5rem;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${(props) => props.theme.colors.textColor};
  }
`;
