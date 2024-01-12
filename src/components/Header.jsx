import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <header className={styles.main_header}>
      <Link className="" to="/">
        Main
      </Link>
      <Link className="" to="/assignment">
        Assignment
      </Link>
    </header>
  );
}

export default Header;
