import { useSumContext } from '../Context'
import styles from './styles.module.scss'

export default function SumDisplay() {
  const { pena, multa, fianca } = useSumContext()

  function copyToClipboard(value, id) {
    if (process.browser){
      var input = document.getElementById(id)
      input.value = value;
      input.focus();
      input.select();
      document.execCommand('copy');
    }

  }
  return (
    <section className={styles.box}>
      <h3>Resultado</h3>
      <div className={styles.contents}>
        <div className={styles.content}>
          <label htmlFor="pena"><h4>Pena: </h4></label>
          <input type="text" id="pena" value={pena} onClick={() => copyToClipboard(pena, "pena")} readOnly />
          <span/>
        </div>
        <div className={styles.content}>
          <label htmlFor="multa"><h4>Multa: </h4></label>
          <input type="text" id="multa" value={multa} onClick={() => copyToClipboard(multa, "multa")} readOnly />
          <span/>
        </div>
        <div className={styles.content}>
          <label htmlFor="fianca"><h4>Fiança: </h4></label>
          <input type="text" id="fianca" value={fianca} onClick={() => copyToClipboard(fianca, "fianca")} readOnly />
          <span/>
        </div>
      </div>
    </section>
  )
}