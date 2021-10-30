import { FunctionComponent } from "react";

import styles from "../styles/Intro.module.scss";

import Select from "../../select/src/Select";

interface Props {
  summary: string;
  sections: object;
}

const Intro: FunctionComponent<Props> = ({ summary, sections }) => {
  return (
    <section className={styles.container}>
      <p>{summary}</p>
      <Select sections={sections} />
    </section>
  );
};

export default Intro;
