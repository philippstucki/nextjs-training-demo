import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { useEffect } from "react";

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${process.env.SERVER_API_ENDPOINT}/people/2`);
  const person = await res.json();

  return {
    props: {
      person,
    },
  };
};

interface PageProps {
  person: {
    name: string;
  };
}

const Page: NextPage<PageProps> = (props) => {
  useEffect(() => {
    console.log(process.env.SERVER_API_KEY);
    console.log(process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY);
  }, []);

  return (
    <main>
      <h1>{props.person.name}</h1>
    </main>
  );
};

export default Page;
