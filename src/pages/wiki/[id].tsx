import axios from "axios";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

import Accordion from "../../../accordion/src/Accordion";
import Aside from "../../../aside/src/Aside";
import Footer from "../../../footer/src/Footer";
import Header from "../../../header/src/Header";
import PageData from "../../components/PageData";
import Section from "../../../section/src/Section";
import Select from "../../../select/src/Select";

const Wiki: NextPage = () => {
  const [article, setArticle] = useState({
    id: "",
    title: "",
    isCompleted: false,
    summary: "",
    sections: {},
    extra: {},
  });

  useEffect(() => {
    const fetchArticles = async () => {
      const fetchedArticle = await axios("http://localhost:3000/api/data");
      setArticle(fetchedArticle.data);
    };
    fetchArticles();
  }, []);

  const { title, summary } = article;

  return (
    <PageData title={`${title}`} description={`${summary}`}>
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
