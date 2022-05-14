import { NextPage } from "next";
import { useCallback, useEffect, useRef, useState } from "react";

const UseStateDemo: NextPage = () => {
  const observer = useRef<ResizeObserver>();
  const containerElementRef = useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState<number>(0);

  const resizeCallback = useCallback((entries: ResizeObserverEntry[]) => {
    console.log(entries[0].contentRect.width);
    setWidth(entries[0].contentRect.width | 0);
  }, []);

  useEffect(() => {
    observer.current = new ResizeObserver(resizeCallback);
    containerElementRef.current &&
      observer.current.observe(containerElementRef.current);
  }, []);

  return (
    <div
      ref={containerElementRef}
      style={{
        width: "90%",
        margin: "0 auto",
        minHeight: "50vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <span style={{ fontSize: "5em" }}>🤹</span>
        <br />
        width: {width}
      </div>
    </div>
  );
};

export default UseStateDemo;
