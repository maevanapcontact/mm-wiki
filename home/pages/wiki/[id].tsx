// import axios from "axios";
import type { NextPage } from "next";
// import { useEffect, useState } from "react";

// import styles from "../../styles/page.module.scss";

// import Accordion from "../../../accordion/src/Accordion";
// import Aside from "../../../aside/src/Aside";
// import CompletionModal from "../../components/CompletionModal";
// import Footer from "../../../footer/src/Footer";
// import Header from "../../../header/src/Header";
// import Intro from "../../components/Intro";
// import PageData from "../../components/PageData";
// import PageHeader from "../../components/PageHeader";
// import Portal from "../../components/Portals";

const Wiki: NextPage = () => {
  return (
    <div>
      <span>Wiki Page</span>
    </div>
  );
  // const [article, setArticle] = useState({
  //   id: "",
  //   title: "",
  //   isCompleted: false,
  //   summary: "",
  //   sections: {
  //     history: { title: "", sub: [{ title: "", content: "" }] },
  //     identity: { title: "", sub: "", logos: [{ src: "", title: "" }] },
  //     numbers: { title: "", data: [] },
  //     notes: { title: "", data: [] },
  //   },
  //   extra: {
  //     title: "",
  //     subtitle: "",
  //     src: "",
  //     caption: "",
  //     content: [
  //       {
  //         title: "",
  //         info: "",
  //       },
  //     ],
  //     ca: {
  //       title: "",
  //       info: "",
  //     },
  //   },
  // });
  // const [isOpen, setIsOpen] = useState({
  //   history: true,
  //   identity: true,
  //   numbers: true,
  //   notes: true,
  // });

  // useEffect(() => {
  //   const fetchArticles = async () => {
  //     const fetchedArticle = await axios("http://localhost:3000/api/data");
  //     setArticle(fetchedArticle.data);
  //   };
  //   fetchArticles();
  // }, []);

  // const { title, summary, extra, sections } = article;
  // const { history, identity, numbers, notes } = sections;

  // return (
  //   <PageData title={`${title}`} description={`${summary}`}>
  //     <Header />
  //     <main className={styles.container}>
  //       <PageHeader title={title} />
  //       <CompletionModal />
  //       <div>
  //         <Aside data={extra} />
  //         <div>
  //           <Intro summary={summary} sections={sections} />

  //           <Accordion
  //             title={history.title}
  //             handleClick={() =>
  //               setIsOpen({ ...isOpen, history: !isOpen.history })
  //             }
  //             isOpen={isOpen.history}
  //           />
  //           {isOpen.history && (
  //             <section className={styles.section}>
  //               {history.sub.map((elt) => (
  //                 <>
  //                   <h3 className={styles.sectionTitle}>
  //                     <span className={styles.sectionTitleText}>
  //                       {elt.title}
  //                     </span>
  //                     <button
  //                       type="button"
  //                       className={styles.sectionEditButton}
  //                     >
  //                       E
  //                     </button>
  //                   </h3>
  //                   <p>{elt.content}</p>
  //                 </>
  //               ))}
  //             </section>
  //           )}

  //           <Accordion
  //             title={identity.title}
  //             handleClick={() =>
  //               setIsOpen({ ...isOpen, identity: !isOpen.identity })
  //             }
  //             isOpen={isOpen.identity}
  //           />
  //           {isOpen.identity && (
  //             <section className={styles.section}>
  //               <h3 className={styles.logosSub}>{identity.sub}</h3>
  //               <div className={styles.logosWrapper}>
  //                 {identity.logos.map((logo) => (
  //                   <div className={styles.logoContainer}>
  //                     <div className={styles.logo}></div>
  //                     <span className={styles.logoTitle}>{logo.title}</span>
  //                   </div>
  //                 ))}
  //               </div>
  //             </section>
  //           )}

  //           <Accordion
  //             title={numbers.title}
  //             handleClick={() =>
  //               setIsOpen({ ...isOpen, numbers: !isOpen.numbers })
  //             }
  //             isOpen={isOpen.numbers}
  //           />
  //           {isOpen.numbers && (
  //             <section className={styles.section}>
  //               <ul className={styles.numbersList}>
  //                 {numbers.data.map((elt) => (
  //                   <li className={styles.numberElt}>{elt}</li>
  //                 ))}
  //               </ul>
  //             </section>
  //           )}

  //           <Accordion
  //             title={notes.title}
  //             handleClick={() => setIsOpen({ ...isOpen, notes: !isOpen.notes })}
  //             isOpen={isOpen.notes}
  //           />
  //           {isOpen.notes && (
  //             <section className={styles.section}>
  //               <ol className={styles.notesList}>
  //                 {notes.data.map((elt) => (
  //                   <li className={styles.notesElt}>{elt}</li>
  //                 ))}
  //               </ol>
  //             </section>
  //           )}
  //         </div>
  //       </div>

  //       <Portal />
  //     </main>
  //     <Footer days={5} author="Alex-Labarriere-Paris" />
  //   </PageData>
  // );
};

export default Wiki;
