import type { GetServerSideProps, NextPage } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  console.log(process.env.SERVER_API_ENDPOINT);

  // fetch something here

  return {
    props: {},
  };
};

interface PageProps {
  timestamp: string;
  pageIds: number[];
}

const Page: NextPage<PageProps> = () => (
  <main>
    <h1>Env Vars exposed to the Browser:</h1>
    {process.env.SERVER_API_KEY}
  </main>
);

export default Page;
