import type { NextPage } from "next";
import { AnotherMainHeader } from "../../src/components/cssmodules/AnotherMainHeader";
import { MainHeader } from "../../src/components/cssmodules/MainHeader";

const Page: NextPage = () => (
  <main>
    <MainHeader>CSS Modules in Action</MainHeader>
    <AnotherMainHeader>Another Main Header</AnotherMainHeader>
  </main>
);

export default Page;
