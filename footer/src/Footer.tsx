import { FunctionComponent } from "react";

import styles from "./styles/Footer.module.scss";

import Card from "../../card/src/Card";

interface Props {
  days: number;
  author: string;
}

const Footer: FunctionComponent<Props> = ({ days, author }) => {
  return (
    <footer className={styles.container}>
      <div className={styles.lastModified}>
        <span className={styles.lastContentText}>
          Dernière modification il y a {days} jours par {author}
        </span>
      </div>
      <div className={styles.postContent}>
        <div>
          <h2 className={styles.readMoreTitle}>Pages associées</h2>
          <ul className={styles.readMoreList}>
            <Card
              src="/wiki/ManoMano"
              title="Alan (entreprise)"
              subtitle="entreprise française"
            />
            <Card
              src="/wiki/ManoMano"
              title="October (entreprise)"
              subtitle="entreprise française"
            />
            <Card src="/wiki/ManoMano" title="Kartable" />
          </ul>
        </div>
        <div className={styles.logo}>Wikipédia</div>
        <div className={styles.license}>
          Le contenu est disponible sous licence CC BY-SA 3.0 sauf mention
          contraire.
        </div>
        <ul className={styles.footerPlaces}>
          <li>
            <a href="/wiki/ManoMano">Conditions d'utilisation</a>
          </li>
          <li>
            <a href="/wiki/ManoMano">Politique de confidentialité</a>
          </li>
          <li>
            <a href="/wiki/ManoMano">Désactiver la version mobile</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
