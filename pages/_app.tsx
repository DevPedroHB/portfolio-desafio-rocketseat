import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Footer from "../components/Footer";
import GlobalStyle from "../styles/global";
import darkTheme from "../styles/themes/dark";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Head>
        <title>Portfolio Challenge</title>
      </Head>
      <Component {...pageProps} />
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  );
}
