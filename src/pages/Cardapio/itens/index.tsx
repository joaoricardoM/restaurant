/* eslint-disable react-hooks/exhaustive-deps */
import cardapio from '../../../data/cardapio.json'
import { Cardapio } from '../../../types/Prato'
import Item from './item'
import styles from './itens.module.scss'
import { useState, useEffect } from 'react'
import React from 'react'

interface Props {
  busca: string
  filtro: number | null
  ordenador: string
  ordem: boolean
}

export default function Itens(props: Props) {
  const [lista, setLista] = useState(cardapio)
  const { busca, filtro, ordenador, ordem } = props

  function testaBusca(title: string) {
    const regex = new RegExp(busca, 'i')
    return regex.test(title)
  }

  function testaFiltro(id: number) {
    if (filtro !== null) return filtro === id
    return true
  }

  function ordenaPor(lista: Cardapio, criterio: 'size' | 'serving' | 'price') {
    return lista.sort((a, b) => (a[criterio] > b[criterio] ? 1 : -1))
  }

  function reverter(lista: typeof cardapio, ordem: boolean) {
    return ordem ? lista : lista.reverse()
  }

  function ordernar(novaLista: typeof cardapio) {
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
    return cardapio.filter(
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
