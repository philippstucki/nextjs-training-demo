import { NextPage, GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      id: ctx.query.id,
      timestamp: new Date().toISOString(),
    },
  };
};
interface PageProps {
  id: number;
  timestamp: string;
}

const Page: NextPage<PageProps> = (props) => (
  <main>
    <h1>Server Side Rendering</h1>
    <p>This page is rendered on the server.</p>
    <p>
      id: {props.id}
      <br />
      timestamp: {props.timestamp}
    </p>
  </main>
);

export default Page;
