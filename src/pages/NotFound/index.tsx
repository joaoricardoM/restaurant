import styles from './NotFound.module.scss'
import { ReactComponent as NotFoundImage } from '../../assets/not_found.svg'
import classNames from 'classnames'
import styleTema from '../../styles/Tema.module.scss'
import { useNavigate } from 'react-router-dom'
import React from 'react'

export default function NotFound() {
  const navigate = useNavigate()

  function handleClick() {
    navigate('/')
  }

  return (
    <div
      className={classNames({
        [styles.container]: true,
        [styleTema.container]: true
      })}
    >
      <div className={styles.voltar}>
        <button onClick={handleClick}>{'<Ir para página Home'}</button>
      </div>
      <NotFoundImage />
    </div>
  )
}
