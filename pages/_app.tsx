import { AppProps } from "next/app";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";
import Header from "../components/Header";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
