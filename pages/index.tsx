import type { NextPage } from "next";
import Link from "next/link";

const Page: NextPage = () => (
  <>
    <main>
      <h1>Next.js Training Demo</h1>

      <h2>Page Rendering Modes</h2>
      <ul>
        <li>
          <Link href="/prerendering-modes/ssg">
            <a>Static Generation Without Data</a>
          </Link>
        </li>
        <li>
          <Link href="/prerendering-modes/ssg-with-data">
            <a>Static Generation With Data</a>
          </Link>
        </li>
        <li>
          <Link href="/prerendering-modes/isr">
            <a>Incremental Static Regeneration</a>
          </Link>
        </li>
        <li>
          <Link href="/prerendering-modes/ssr">
            <a>Server Side Rendering</a>
          </Link>
        </li>
      </ul>
    </main>
  </>
);

export default Page;
