import styled from "@emotion/styled";
import { css } from "@emotion/react";
import type { NextPage } from "next";

const StyledComponent = styled.div`
  background-color: hotpink;
  padding: 5rem;
  &:hover {
    background-color: limegreen;
  }
`;

// composition with css``
const baseStyle = css`
  background-color: hotpink;
`;
const ComposedStyledComponent = styled.div`
  ${baseStyle};
  padding: 5rem;
  &:hover {
    background-color: limegreen;
  }
`;

const ObjectStyles = () => (
  <div
    css={{
      backgroundColor: "hotpink",
      "&:hover": {
        backgroundColor: "limegreen",
      },
      padding: "5rem",
    }}
  >
    Styled using the css prop.
  </div>
);

// object styles composing
const containerPadding = {
  padding: "2rem",
};
const important = {
  backgroundColor: "#fab",
};
const ComposedObjectStyles = styled.div([
  containerPadding,
  important,
  {
    fontSize: "4rem",
    padding: "6rem",
  },
]);

const Page: NextPage = () => (
  <>
    <StyledComponent>Styled using styled.div()</StyledComponent>
    <ComposedStyledComponent>
      Composed styling with styled.div()
    </ComposedStyledComponent>
    <ObjectStyles />
    <ComposedObjectStyles>Composed Object Style</ComposedObjectStyles>
  </>
);

export default Page;
