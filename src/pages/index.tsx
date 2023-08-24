import styles from './Cardapio.module.scss'
import { ReactComponent as Logo } from '../assets/logo.svg'
import Buscardor from './Buscador'
import { useState } from 'react'
import Filtros from './filtros'
import Ordenador from './Ordenador'
import Itens from './itens'
import Crescente from './Crescente'

export default function Cardapio() {
  const [busca, setBusca] = useState('')
  const [filtro, setFiltro] = useState<number | null>(null)
  const [ordenador, setOrdenador] = useState('')
  const [ordem, setOrdem] = useState(true)

  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
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
