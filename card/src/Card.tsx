import { FunctionComponent } from "react";

import styles from "./styles/Card.module.scss";

interface Props {
  src: string;
  title: string;
  subtitle: string;
}

const Card: FunctionComponent<Partial<Props>> = ({ src, title, subtitle }) => {
  return (
    <li className={styles.container}>
      <a className={styles.link} href={src}>
        <div className={styles.img}></div>
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      </a>
    </li>
  );
};

export default Card;
