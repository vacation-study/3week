import React from "react";
import { arr123 ,modal123, modal1234 } from "../atom";
import { useRecoilState } from 'recoil';
import styles from "../styles/Modal.module.css";

function Button({ saveData, setState }) {
  const [modal, setModal] = useRecoilState(modal123);
  const [modal2, setModal2] = useRecoilState(modal1234);
  const [arr, setArr] = useRecoilState(arr123);
  return (
    <section className={styles.modalbutton}>
      <div className={styles.buttons}>
        <button onClick={() => setModal((state) => !state)}>on</button>
        <button onClick={() => setModal((state) => !state)}>off</button>
      </div>
    </section>
  );
}

export default Button;
