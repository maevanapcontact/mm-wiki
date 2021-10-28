import type { NextPage } from "next";
import { useRouter } from "next/router";

import Accordion from "../../../accordion/src/Accordion";
import Aside from "../../../aside/src/Aside";
import Footer from "../../../footer/src/Footer";
import Header from "../../../header/src/Header";
import PageData from "../../components/PageData";
import Section from "../../../section/src/Section";
import Select from "../../../select/src/Select";

const Wiki: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <PageData title={`${id}`} description={`${id}`}>
      <Header />
      <main>
        <div>
          <div></div>
          <nav></nav>
        </div>
        <div></div>
        <div>
          <Aside />
          <div>
            <section></section>
            <Select />
            <Accordion />
            <Section />
            <Accordion />
            <Section />
            <Accordion />
            <Section />
            <Accordion />
            <Section />
          </div>
        </div>
      </main>
      <Footer />
    </PageData>
  );
};

export default Wiki;
