import styles from './Cardapio.module.scss'
import { ReactComponent as Logo } from '../assets/logo.svg'
import Buscardor from './Buscador'
import { useState } from 'react'
import Filtros from './filtros'
import Ordenador from './Ordenador'
import Itens from './itens'
import Crescente from './Crescente'
import '../styles-dark.scss'
import { BsSunFill, BsMoonFill } from 'react-icons/bs'

export default function Cardapio() {
  const [busca, setBusca] = useState('')
  const [filtro, setFiltro] = useState<number | null>(null)
  const [ordenador, setOrdenador] = useState('')
  const [ordem, setOrdem] = useState(true)

  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.body.classList.toggle('dark', !isDarkMode)
  }

  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
        <button
          className={`${styles.square_button} ${styles.dark_button}`}
          onClick={toggleDarkMode}
        >
          {isDarkMode ? <BsSunFill /> : <BsMoonFill />}
        </button>
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>JRM La Trattoria</div>
      </header>
      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>Cardapio</h3>
        <Buscardor busca={busca} setBusca={setBusca} />
        <div className={styles.cardapio__filtros}>
          <Filtros filtro={filtro} setFiltro={setFiltro} />
          <div className={styles.teste}>
            <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
            <Crescente ordem={ordem} setOrdem={setOrdem} />
          </div>
        </div>
        <Itens
          busca={busca}
          filtro={filtro}
          ordenador={ordenador}
          ordem={ordem}
        />
      </section>
    </main>
  )
}
