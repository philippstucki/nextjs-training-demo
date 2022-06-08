import type { NextPage } from "next";
import { useState } from "react";
import * as ReactDOM from "react-dom";

const ModalDialog = ({ onClose }: { onClose: () => void }) =>
  ReactDOM.createPortal(
    <div>
      <button onClick={onClose}>Close Dialog</button>
      <p>Dialog Content</p>
    </div>,
    document.body
  );

const Page: NextPage = () => {
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <main
      onClick={() => setCount((current) => current + 1)}
      style={{ minHeight: "300px", border: "1px solid gray" }}
    >
      <button onClick={() => setVisible(true)}>Open Dialog</button>
      <p>Current count: {count}</p>

      {visible && <ModalDialog onClose={() => setVisible(false)} />}
    </main>
  );
};

export default Page;
