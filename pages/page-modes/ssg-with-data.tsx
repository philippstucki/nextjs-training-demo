import type { NextPage } from "next";

export const getStaticProps = async () => {
  const res = await fetch("https://swapi.dev/api/films/1");
  const film = await res.json();

  return {
    props: {
      film,
      timestamp: new Date().toISOString(),
    },
  };
};

const Page: NextPage = (props: any) => (
  <main>
    <p>
      This page is rendered statically on build. Data is fetched using{" "}
      <code>getStaticProps</code>
    </p>
    <p>Film Title: {props.film.title}</p>
    <p>Timestamp: {props.timestamp}</p>
  </main>
);

export default Page;
