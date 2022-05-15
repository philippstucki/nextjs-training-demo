import { NextPage } from "next";
import { useState } from "react";

const UseObjectState = () => {
  const [menuState, setMenuState] = useState({
    level1: false,
    level2: false,
  });

  return (
    <main>
      <div>
        level1: {`${menuState.level1}`}
        <br />
        level2: {`${menuState.level2}`}
      </div>
      <button
        onClick={() =>
          setMenuState((current) => ({
            ...current,
            level1: !current.level1,
          }))
        }
      >
        Toggle Level 1
      </button>
      <button
        onClick={() =>
          setMenuState((current) => ({
            ...current,
            level2: !current.level2,
          }))
        }
      >
        Toggle Level 1
      </button>
    </main>
  );
};

const UseAtomicState = () => null;

const UseStateFunctionalUpdates = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
    setCount(count + 1);
  };

  return (
    <main>
      <button onClick={incrementCount}>Count: {count}</button>
    </main>
  );
};

const UseStatePage: NextPage = () => (
  <>
    <UseObjectState />
    {/* <UseAtomicState /> */}
    {/* <UseStateFunctionalUpdates /> */}
  </>
);

export default UseStatePage;
