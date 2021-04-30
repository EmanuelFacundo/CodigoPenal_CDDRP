import { data } from "../../data"
import { useSumContext } from "../Context"

import styles from "./styles.module.scss"

export default function CheckBox(props) {
  const  { checks }  = useSumContext()
  const { 
    vestimenta, 
    transito,
    honra,
    pazPublica,
    liberdadePessoal,
    administrativoP,
    administrativoJ,
    periclitacao,
    estelionatoOutros,
    patrimonio,
    trafico,
    armas,
    municao,
    itensIlegais,
    militares
  } = data

  return (
    <div className={styles.categorias}>
      <div className={styles.container}>
        <section className={styles.section}>
          <h2 className={styles.title}>Uso de Vestimenta</h2>
          <div className={styles.checksbox}>
            {checks(vestimenta)}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>Infrações de Trânsito</h2>
          <div className={styles.checksbox}>
            {checks(transito)}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>Crimes Contra Honra</h2>
          <div className={styles.checksbox}>
            {checks(honra)}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>Crimes Contra a Paz Pública</h2>
          <div className={styles.checksbox}>
            {checks(pazPublica)}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>Crimes Contra Liberdade Pessoal</h2>
          <div className={styles.checksbox}>
            {checks(liberdadePessoal)}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>Crimes Praticados por Particular Contra a Administração em Geral</h2>
          <div className={styles.checksbox}>
            {checks(administrativoP)}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>Crimes Contra a Administração da Justiça</h2>
          <div className={styles.checksbox}>
            {checks(administrativoJ)}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>Crimes de Periclitação da Vida e da Saúde</h2>
          <div className={styles.checksbox}>
            {checks(periclitacao)}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>Crime de Estelionato e outras Fraudes</h2>
          <div className={styles.checksbox}>
            {checks(estelionatoOutros)}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>Crimes Contra o Patrimônio</h2>
          <div className={styles.checksbox}>
            {checks(patrimonio)}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>Crimes de Tráfico</h2>
          <div className={styles.checksbox}>
            {checks(trafico)}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>Crimes Uso Ilegal De Armas</h2>
          <div className={styles.checksbox}>
            {checks(armas)}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>Crimes de Munição Apreendida</h2>
          <div className={styles.checksbox}>
            {checks(municao)}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>Crimes Itens Ilegais</h2>
          <div className={styles.checksbox}>
            {checks(itensIlegais)}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>Crimes Militares</h2>
          <div className={styles.checksbox}>
            {checks(militares)}
          </div>
        </section>
      </div>
    </div>
  )
}