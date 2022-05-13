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

      <h2>Class Components</h2>
      <ul>
        <li>
          <Link href="/class-components/stateless">
            Stateless Class Component
          </Link>
        </li>
        <li>
          <Link href="/class-components/stateful">
            Stateful Class Component
          </Link>
        </li>
        <li>
          <Link href="/class-components/lifecycle-methods">
            Class Component Lifecycle
          </Link>
        </li>
      </ul>

      <h2>Function Components</h2>
      <ul>
        <li>
          <Link href="/function-components/stateless">Stateless Component</Link>
        </li>
        <li>
          <Link href="/function-components/lifecycle-methods">
            Function Component Lifecycle
          </Link>
        </li>
      </ul>

      <h2>Hooks</h2>
      <ul>
        {/* <li>
          <Link href="/hooks/lifecycle">Component Lifecycle</Link>
        </li> */}
      </ul>
    </main>
  );
};

export default Page;
