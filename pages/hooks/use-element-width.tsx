import { NextPage } from "next";
import React from "react";
import { useElementWidth } from "./useElementWidth";

const TableHeaderColumns = () => (
  <React.Fragment>
    <th>Name</th>
    <th>Age</th>
  </React.Fragment>
);

const Container = () => {
  const [containerElementRef, width] = useElementWidth<HTMLDivElement>();

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

const UseStateDemo: NextPage = () => (
  <>
    <Container />
    <Container />
  </>
);

export default UseStateDemo;
