import { estelionatoOutros, honra, itensIlegais, liberdadePessoal } from "../../data"
import { transito, administrativoJ, administrativoP, armas } from "../../data"
import { militares, municao, patrimonio, pazPublica } from "../../data"
import {periclitacao, trafico, vestimenta } from "../../data"
import { inputs } from "./actions"

import styles from "./styles.module.scss"

export default function CheckBox(props) {

  return (
    <div className={styles.categorias}>
      <section>
        <h2>Uso de Vestimenta</h2>
        <>
          {inputs(vestimenta)}
        </>
      </section>

      <section>
        <h2>Infrações de Trânsito</h2>
        <div>
          {inputs(transito)}
        </div>
      </section>

      <section>
        <h2>Crimes Contra Honra</h2>
        <>
          {inputs(honra)}
        </>
      </section>

      <section>
        <h2>Crimes Contra a Paz Pública</h2>
        <>
          {inputs(pazPublica)}
        </>
      </section>

      <section>
        <h2>Crimes Contra Liberdade Pessoal</h2>
        <>
          {inputs(liberdadePessoal)}
        </>
      </section>

      <section>
        <h2>Crimes Praticados por Particular Contra a Administração em Geral</h2>
        <>
          {inputs(administrativoP)}
        </>
      </section>

      <section>
        <h2>Crimes Contra a Administração da Justiça</h2>
        <>
          {inputs(administrativoJ)}
        </>
      </section>

      <section>
        <h2>Crimes de Periclitação da Vida e da Saúde</h2>
        <>
          {inputs(periclitacao)}
        </>
      </section>

      <section>
        <h2>Crime de Estelionato e outras Fraudes</h2>
        <>
          {inputs(estelionatoOutros)}
        </>
      </section>

      <section>
        <h2>Crimes Contra o Patrimônio</h2>
        <>
          {inputs(patrimonio)}
        </>
      </section>

      <section>
        <h2>Crimes de Tráfico</h2>
        <>
          {inputs(trafico)}
        </>
      </section>

      <section>
        <h2>Crimes Uso Ilegal De Armas</h2>
        <>
          {inputs(armas)}
        </>
      </section>

      <section>
        <h2>Crimes de Munição Apreendida</h2>
        <>
          {inputs(municao)}
        </>
      </section>

      <section>
        <h2>Crimes Itens Ilegais</h2>
        <>
          {inputs(itensIlegais)}
        </>
      </section>

      <section>
        <h2>Crimes Militares</h2>
        <>
          {inputs(militares)}
        </>
      </section>
    </div>
  )
}