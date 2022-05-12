import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";

const CustomApp = ({ Component, pageProps }: AppProps) => {
  const [menu, setMenu] = useState(false);

  return (
    <div id="customApp">
      <h1>Hello From App Component</h1>
      <button onClick={() => setMenu(!menu)}>{JSON.stringify(menu)}</button>
      <Component {...pageProps} />
    </div>
  );
};

export default CustomApp;
