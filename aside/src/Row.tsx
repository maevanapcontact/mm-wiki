import { FunctionComponent } from "react";

import styles from "./styles/Row.module.scss";

interface Props {
  title: string;
  info: string;
  isLast?: boolean;
}

const Row: FunctionComponent<Props> = ({ title, info, isLast }) => {
  return (
    <tr className={styles.row}>
      <td
        className={isLast ? `${styles.title} ${styles.lastRow}` : styles.title}
      >
        {title}
      </td>
      <td className={isLast ? `${styles.info} ${styles.lastRow}` : styles.info}>
        {info}
      </td>
    </tr>
  );
};

export default Row;
