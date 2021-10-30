import styles from "../styles/Portals.module.scss";

const Portal = () => {
  return (
    <ul className={styles.container}>
      <li className={styles.elt}>
        <div className={styles.img}></div>
        <a href="/" className={styles.text}>
          Portail des entreprises
        </a>
      </li>
      <li className={styles.elt}>
        <div className={styles.img}></div>
        <a href="/" className={styles.text}>
          Portail d'internet
        </a>
      </li>
      <li className={styles.elt}>
        <div className={styles.img}></div>
        <a href="/" className={styles.text}>
          Portail du commerce
        </a>
      </li>
      <li className={styles.elt}>
        <div className={styles.img}></div>
        <a href="/" className={styles.text}>
          Portail de la France
        </a>
      </li>
    </ul>
  );
};

export default Portal;
