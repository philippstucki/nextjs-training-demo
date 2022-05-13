import React from "react";
import type { NextPage } from "next";
import Link from "next/link";

const Page: NextPage = () => {
  return (
    <main>
      <h1>Next.js Training Demo</h1>

      <h2>Page Rendering Modes</h2>
      <ul>
        <li>
          <Link href="/prerendering-modes/ssg">
            Static Generation Without Data
          </Link>
        </li>
        <li>
          <Link href="/prerendering-modes/ssg-with-data">
            Static Generation With Data
          </Link>
        </li>
        <li>
          <Link href="/prerendering-modes/isr">
            Incremental Static Regeneration
          </Link>
        </li>
        <li>
          <Link href="/prerendering-modes/ssr">Server Side Rendering</Link>
        </li>
      </ul>

      <h2>Environment</h2>
      <ul>
        <li>
          <Link href="/env-vars">Env Variables</Link>
        </li>
      </ul>

      <h2>Hooks and Lifecycle</h2>
      <ul>
        <li>
          <Link href="/hooks/lifecycle">Component Lifecycle</Link>
        </li>
      </ul>
    </main>
  );
};

export default Page;
