import "../styles/globals.css";
import type { AppProps } from "next/app";

const CustomApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default CustomApp;
