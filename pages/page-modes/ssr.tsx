import type { NextPage } from "next";

export const getServerSideProps = async () => ({
  props: {
    timestamp: new Date().toISOString(),
  },
});

const Page: NextPage = (props: any) => (
  <main>
    <h1>This page is rendered on the server</h1>
    <p>Timestamp: {props.timestamp}</p>
  </main>
);

export default Page;
