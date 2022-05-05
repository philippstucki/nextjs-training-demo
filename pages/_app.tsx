import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";

const CustomApp = ({ Component, pageProps }: AppProps) => {
  const [count, setCount] = useState(0);

  return (
    <div id="customApp">
      <p>Main Layout</p>
      <button onClick={() => setCount(count + 1)}>
        Current count: {count}
      </button>
      <Component {...pageProps} />
    </div>
  );
};

export default CustomApp;
