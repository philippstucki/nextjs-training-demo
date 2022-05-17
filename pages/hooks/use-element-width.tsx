import { NextPage } from "next";
import { useElementWidth } from "../../src/hooks/useElementWidth";

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

const UseElementWidthPage: NextPage = () => (
  <>
    <Container />
    <Container />
  </>
);

export default UseElementWidthPage;
