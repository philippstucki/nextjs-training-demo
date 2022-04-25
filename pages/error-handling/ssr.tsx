import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";

export const getServerSideProps: GetServerSideProps = async () => ({
  props: {
    timestamp: new Date().toISOString(),
  },
});

interface PageProps {
  timestamp: string;
}

const Page: NextPage<PageProps> = (props) => (
  <main>
    <h1>Server Side Rendering</h1>
    <p>This page is rendered on the server.</p>
    <p>Timestamp: {props.timestamp}</p>
  </main>
);

export default Page;
