import { FunctionComponent } from "react";
import Image from "next/image";

import styles from "./styles/Aside.module.scss";

import Row from "./Row";

interface Info {
  title: string;
  info: string;
}
interface Extra {
  title: string;
  subtitle: string;
  src: string;
  caption: string;
  content: Info[];
  ca: Info;
}
interface Props {
  data: Extra;
}

const Aside: FunctionComponent<Props> = ({ data }) => {
  const { title, subtitle, src, caption, content, ca } = data;

  return (
    <aside className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerAside}>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
        </div>
        <div className={styles.headerData}>
          <a href={src}>
            <Image
              src="/ManoMano_2018.png"
              alt="ManoMano"
              width="280"
              height="88"
            />
          </a>
          <span className={styles.caption}>{caption}</span>
        </div>
      </header>
      <table className={styles.table}>
        <tbody>
          {content.map((elt) => (
            <Row title={elt.title} info={elt.info} />
          ))}
          <Row title={ca.title} info={ca.info} isLast />
        </tbody>
      </table>
      <footer className={styles.footer}>
        <span>
          <a href="/">modifier</a>
          {` - `}
          <a href="/">modifier le code</a>
          {` - `}
          <a href="/">voir Wikidata</a>
        </span>
      </footer>
    </aside>
  );
};

export default Aside;
