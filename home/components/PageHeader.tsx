import { FunctionComponent } from "react";

import styles from "../styles/PageHeader.module.scss";

interface Props {
  title: string;
}

const PageHeader: FunctionComponent<Props> = ({ title }) => {
  return (
    <div>
      <h1 className={styles.title}>{title}</h1>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navElt}>
            <a href="/">Langue</a>
          </li>
          <li className={styles.navElt}>
            <a href="/">Suivre</a>
          </li>
          <li className={styles.navElt}>
            <a href="/">Modifier</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PageHeader;
