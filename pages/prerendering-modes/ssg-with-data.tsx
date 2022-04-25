import type { GetServerSideProps, NextPage } from "next";

export const getStaticProps: GetServerSideProps = async () => {
  const res = await fetch("https://swapi.dev/api/films/1");
  const film = await res.json();

  return {
    props: {
      film,
      timestamp: new Date().toISOString(),
    },
  };
};

interface Film {
  title: string;
}
interface PageProps {
  timestamp: string;
  film: Film;
}

const Page: NextPage<PageProps> = (props) => (
  <main>
    <h1>Static Generation With Data</h1>
    <p>
      This page is rendered statically on build. Data is fetched using{" "}
      <em>getStaticProps</em>
    </p>
    <p>Film Title: {props.film.title}</p>
    <p>Timestamp: {props.timestamp}</p>
  </main>
);

export default Page;
