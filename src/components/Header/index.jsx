import styles from './styles.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <img className="logo" src="logoPolicia.png" alt="Logo da Policia" />
      <div className={styles.title}>
        <h1 >Cidade de Deus RP</h1>
        <p className={styles.subTitle}>Calculadora Penal</p>
      </div>
    </header>
  )
}