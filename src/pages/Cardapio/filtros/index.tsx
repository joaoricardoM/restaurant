import React from 'react'
import filtros from './filtros.json'
import styles from './Filtros.module.scss'
import classNames from 'classnames'

type IOption = (typeof filtros)[0]

interface Props {
  filtro: number | null
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filtros({ filtro, setFiltro }: Props) {
  function selecionarFiltro(option: IOption) {
    if (filtro === option.id) return setFiltro(null)
    return setFiltro(option.id)
  }

  return (
    <div className={styles.filtros}>
      {filtros.map((option) => (
        <button
          className={classNames({
            [styles.filtros__filtro]: true,
            [styles['filtros__filtro--ativo']]: filtro === option.id
          })}
          key={option.id}
          onClick={() => selecionarFiltro(option)}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
