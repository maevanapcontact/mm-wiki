import { FunctionComponent } from "react";

import styles from "./styles/Select.module.scss";

interface Props {
  sections: object;
}

const Select: FunctionComponent<Props> = ({ sections }) => {
  console.log(sections);
  return <div className={styles.container}>Sommaire</div>;
};

export default Select;
