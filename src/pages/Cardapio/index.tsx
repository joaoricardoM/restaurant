import styles from './Cardapio.module.scss'
import Buscardor from './Buscador'
import { useState } from 'react'
import Filtros from './filtros'
import Ordenador from './Ordenador'
import Itens from './itens'
import Crescente from './Crescente'
import '../../styles-dark.scss'

export default function Cardapio() {
  const [busca, setBusca] = useState('')
  const [filtro, setFiltro] = useState<number | null>(null)
  const [ordenador, setOrdenador] = useState('')
  const [ordem, setOrdem] = useState(true)

  const [isDarkMode] = useState(false)

  return (
    <section className={styles.cardapio}>
      <h3
        className={`__titulo ${isDarkMode ? 'dark' : styles.cardapio__titulo}`}
      >
        Cardapio
      </h3>
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
  )
}
