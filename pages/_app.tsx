import "../styles/globals.css";
import type { AppProps } from "next/app";

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div id="customApp">
      <Component {...pageProps} />
    </div>
  );
};

export default CustomApp;
