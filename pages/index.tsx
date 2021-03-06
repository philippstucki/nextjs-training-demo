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

      <h2>Hooks</h2>
      <ul>
        <li>
          <Link href="/hooks/use-state">useState()</Link>
        </li>
        <li>
          <Link href="/hooks/lifecycle-methods">
            useRef(), useEffect(), useState()
          </Link>
        </li>
      </ul>

      <h2>Custom Hooks</h2>
      <ul>
        <li>
          <Link href="/hooks/resize-observer">Using ResizeObserver</Link>
        </li>
        <li>
          <Link href="/hooks/use-element-width">
            Custom Hook: useElementWidth()
          </Link>
        </li>
      </ul>

      <h2>State Management</h2>
      <ul>
        <li>
          <Link href="/state-management/prop-drilling">Prop Drilling</Link>
        </li>
        <li>
          <Link href="/state-management/context-api">Context API</Link>
        </li>
        <li>
          <Link href="/state-management/zustand">Zustand</Link>
        </li>
        <li>
          <Link href="/state-management/redux/">Redux</Link>
        </li>
        <li>
          <Link href="/state-management/recoil/">Recoil</Link>
        </li>
      </ul>

      <h2>
        CSS in <del>JS</del> TS
      </h2>
      <ul>
        <li>
          <Link href="/cssinjs/cssmodules/">CSS Modules</Link>
        </li>
        <li>
          <Link href="/cssinjs/emotion/">Emotion</Link>
        </li>
      </ul>

      <h2>Various Demos</h2>
      <ul>
        <li>
          <Link href="/portals/">Portals</Link>
        </li>
        <li>
          <Link href="/error-boundaries/">Error Boundaries</Link>
        </li>
        <li>
          <Link href="/middleware/">Middleware</Link>
        </li>
        <li>
          <Link href="/env-variables/">Environment Variables</Link>
        </li>
      </ul>
    </main>
  );
};

export default Page;
