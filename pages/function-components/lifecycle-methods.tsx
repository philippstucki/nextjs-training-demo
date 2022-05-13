import React, { RefObject, useEffect, useRef, useState } from "react";
import type { NextPage } from "next";

const LifeCyclePage: NextPage = () => {
  const domRef = useRef<HTMLDivElement>(null);

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(10);

  console.group("render");
  console.log("domRef", domRef);
  console.groupEnd();

  // called on each render
  useEffect(() => {
    console.group("useEffect: render");
    console.groupEnd();
  });

  // called on mounted
  useEffect(() => {
    console.group("useEffect: component mounted");
    console.log("domRef", domRef);
    console.groupEnd();
  }, []);

  // called when count1 changes
  useEffect(() => {
    console.group("useEffect: count1 changed");
    console.groupEnd();
  }, [count1]);

  return (
    <main>
      <h2>React Lifecycle</h2>
      <div ref={domRef} />
      <button onClick={() => setCount1((currentCount) => currentCount + 1)}>
        count1: {count1}
      </button>
      <button onClick={() => setCount2((currentCount) => currentCount - 1)}>
        count2: {count2}
      </button>
    </main>
  );
};

export default LifeCyclePage;
