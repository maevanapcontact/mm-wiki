import { useState } from "react";

import styles from "./styles/Header.module.scss";

import Nav from "../../nav/src/Nav";

const Header = () => {
  const [input, setInput] = useState("");

  return (
    <header className={styles.container}>
      <form className={styles.form}>
        <Nav />
        <div>WIKIPEDIA</div>
        <div>
          <input
            className={styles.search}
            value={input}
            placeholder="Rechercher dans Wikipédia"
            onChange={(evt) => setInput(evt.target.value)}
          />
        </div>
      </form>
    </header>
  );
};

export default Header;
