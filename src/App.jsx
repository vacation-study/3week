import { Link } from "react-router-dom"
import styles from './styles/App.module.css'

function App() {

  return (
    <div className={styles.out}> 
      <header className={styles.main_header}>
         <Link class="" to="/">Main</Link>
         <Link class="" to="/assignment">Assignment</Link>
        </header>
        <div className={styles.base}>
        <main className={styles.main_a}>
          <div>
          <section>
            <article>
              <fieldset className={styles.fiel}>
                <legend>
                  <h1>study - assignment</h1>
                </legend>
                <Link class="" to="/assignment">시작하기</Link>
              </fieldset>
            </article>
          </section>
          </div>
        </main>
        <footer className={styles.footer_b}>footer</footer>
      </div>
    </div>
    )
  }

export default App
