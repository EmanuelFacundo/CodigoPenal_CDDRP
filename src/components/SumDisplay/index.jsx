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
          <input type="text" id="pena" value={pena === 0 ? "S/Pena" : pena}  readOnly />
          <span onClick={() => copyToClipboard(pena, "pena")}/>
        </div>
        <div className={styles.content}>
          <label htmlFor="multa"><h4>Multa: </h4></label>
          <input type="text" id="multa" value={multa === 0 ? "S/Multa" : multa} readOnly />
          <span onClick={() => copyToClipboard(multa, "multa")}/>
        </div>
        <div className={styles.content}>
          <label htmlFor="fianca"><h4>Fiança: </h4></label>
          <input type="text" id="fianca" value={fianca === 0 ? "S/Fiança" : fianca} readOnly />
          <span onClick={() => copyToClipboard(fianca, "fianca")}/>
        </div>
      </div>
    </section>
  )
}