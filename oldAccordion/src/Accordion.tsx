import { FunctionComponent } from "react";

import styles from "./styles/Accordion.module.scss";

interface Props {
  title: string;
  handleClick: () => void;
  isOpen: boolean;
}

const Accordion: FunctionComponent<Props> = ({
  title,
  handleClick,
  isOpen,
}) => {
  return (
    <h2 className={styles.container}>
      <button className={styles.button} type="button" onClick={handleClick}>
        {isOpen ? "O" : "C"}
      </button>
      <span className={styles.text}>{title}</span>
      <button className={styles.button} type="button">
        E
      </button>
    </h2>
  );
};

export default Accordion;
