import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";

export const getServerSideProps: GetServerSideProps = async () => ({
  props: {
    timestamp: new Date().toISOString(),
    pageIds: [...Array(5).keys()].map((i) => (i + 1) * 100),
  },
});

interface PageProps {
  timestamp: string;
  pageIds: number[];
}

const Page: NextPage<PageProps> = (props) => (
  <main>
    <h1>Server Side Rendering</h1>
    <p>This page is rendered on the server.</p>
    <p>Timestamp: {props.timestamp}</p>
    <h2>Dynamic Pages:</h2>
    <ul>
      {props.pageIds.map((id: number) => (
        <li key={id}>
          <Link href={`/prerendering-modes/ssr-children/${id}`}>
            <a>{id}</a>
          </Link>
        </li>
      ))}
    </ul>
  </main>
);

export default Page;
