import Cardapio from './itens.json'
import Item from './item'
import styles from './itens.module.scss'
import { useState, useEffect } from 'react'

interface Props {
  busca: string
  filtro: number | null
  ordenador: string
  ordem: boolean
}

export default function Itens(props: Props) {
  const [lista, setLista] = useState(Cardapio)
  const { busca, filtro, ordenador, ordem } = props

  function testaBusca(title: string) {
    const regex = new RegExp(busca, 'i')
    return regex.test(title)
  }

  function testaFiltro(id: number) {
    if (filtro !== null) return filtro === id
    return true
  }

  function ordenaPor(
    lista: typeof Cardapio,
    criterio: 'size' | 'serving' | 'price'
  ) {
    return lista.sort((a, b) => (a[criterio] > b[criterio] ? 1 : -1))
  }

  function reverter(lista: typeof Cardapio, ordem: boolean) {
    return ordem ? lista : lista.reverse()
  }

  function ordernar(novaLista: typeof Cardapio) {
    switch (ordenador) {
      case 'porcao':
        return ordenaPor(lista, 'size')
      case 'qtd_pessoas':
        return ordenaPor(lista, 'serving')
      case 'preco':
        return ordenaPor(lista, 'price')
      default:
        return novaLista
    }
  }

  function criaLista() {
    return Cardapio.filter(
      (item) => testaBusca(item.title) && testaFiltro(item.category.id)
    )
  }

  useEffect(() => {
    const novaLista = criaLista()

    setLista(reverter(ordernar(novaLista), ordem))
  }, [busca, filtro, ordenador, ordem])

  return (
    <div className={styles.itens}>
      {lista.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  )
}
