import { estelionatoOutros, honra, itensIlegais, liberdadePessoal } from "../../data"
import { transito, administrativoJ, administrativoP, armas } from "../../data"
import { militares, municao, patrimonio, pazPublica } from "../../data"
import { periclitacao, trafico, vestimenta } from "../../data"
import { inputs } from "./actions"

import styles from "./styles.module.scss"

export default function CheckBox(props) {

  return (
    <div className={styles.categorias}>
      <div className={styles.container}>
        <section className={styles.section}>
          <h2 className={styles.title}>Uso de Vestimenta</h2>
          <div className={styles.checksbox}>
            {inputs(vestimenta)}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>Infrações de Trânsito</h2>
          <div className={styles.checksbox}>
            {inputs(transito)}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>Crimes Contra Honra</h2>
          <div className={styles.checksbox}>
            {inputs(honra)}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>Crimes Contra a Paz Pública</h2>
          <div className={styles.checksbox}>
            {inputs(pazPublica)}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>Crimes Contra Liberdade Pessoal</h2>
          <div className={styles.checksbox}>
            {inputs(liberdadePessoal)}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>Crimes Praticados por Particular Contra a Administração em Geral</h2>
          <div className={styles.checksbox}>
            {inputs(administrativoP)}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>Crimes Contra a Administração da Justiça</h2>
          <div className={styles.checksbox}>
            {inputs(administrativoJ)}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>Crimes de Periclitação da Vida e da Saúde</h2>
          <div className={styles.checksbox}>
            {inputs(periclitacao)}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>Crime de Estelionato e outras Fraudes</h2>
          <div className={styles.checksbox}>
            {inputs(estelionatoOutros)}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>Crimes Contra o Patrimônio</h2>
          <div className={styles.checksbox}>
            {inputs(patrimonio)}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>Crimes de Tráfico</h2>
          <div className={styles.checksbox}>
            {inputs(trafico)}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>Crimes Uso Ilegal De Armas</h2>
          <div className={styles.checksbox}>
            {inputs(armas)}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>Crimes de Munição Apreendida</h2>
          <div className={styles.checksbox}>
            {inputs(municao)}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>Crimes Itens Ilegais</h2>
          <div className={styles.checksbox}>
            {inputs(itensIlegais)}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>Crimes Militares</h2>
          <div className={styles.checksbox}>
            {inputs(militares)}
          </div>
        </section>
      </div>
    </div>
  )
}