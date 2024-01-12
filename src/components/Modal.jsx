import React from "react";
import Button from "../components/Button";
import { arr123 ,modal123, modal1234 } from "../atom";
import { useRecoilState } from 'recoil';

import styles from "../styles/Modal.module.css";

function Modal({saveData, setState }) {
  
  const [modal, setModal] = useRecoilState(modal123);
  const [modal2, setModal2] = useRecoilState(modal1234);
  const [arr, setArr] = useRecoilState(arr123);
  return (
    <section className={styles.modalbutton}>
      <div className={styles.buttons}>
      <Button modal={modal} setModal={setModal} saveData={saveData} setState={setState} />
      </div>
      <div className={styles.input4}>
        {modal === false ? (
          <div className={styles.background1}>Disabled</div>
        ) : null}
        {modal ? (
          <form onSubmit={saveData}>
            {["state1", "state2", "state3", "state4"].map((item) => (
              <input
                key={item}
                type="text"
                minLength="2"
                onChange={(e) => {
                  setState((state) => ({ ...state, [item]: e.target.value }));
                }}
              />
            ))}
            <input type="submit" value="submit" />
          </form>
        ) : null}
      </div>
    </section>
  );
}

export default Modal;
