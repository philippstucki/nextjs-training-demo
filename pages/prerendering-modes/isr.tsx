import type { GetServerSideProps, NextPage } from "next";

export const getStaticProps: GetServerSideProps = async () => {
  return {
    props: {
      timestamp: new Date().toISOString(),
    },
    revalidate: 10,
  };
};

interface PageProps {
  timestamp: string;
}

const Page: NextPage<PageProps> = (props) => (
  <main>
    <h1>Incremental Static Regeneration</h1>
    <p>This page uses incremental static regeneration.</p>
    <p>This page was last rendered on: {props.timestamp}</p>
  </main>
);

export default Page;
