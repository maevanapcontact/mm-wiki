import styles from "../styles/CompletionModal.module.scss";

const CompletionModal = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img}></div>
      <div>
        <p className={styles.title}>
          <strong>
            Cet article est une ébauche concernant une entreprise.
          </strong>
        </p>
        <p>
          Vous pouvez partager vos connaissances en l’améliorant (comment ?).
          <br />
          Une page sur une entreprise étant sujette à controverse, n’oubliez pas
          d’indiquer dans l’article les critères qui le rendent admissible.
        </p>
      </div>
    </div>
  );
};

export default CompletionModal;
