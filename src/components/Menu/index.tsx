import { useState } from 'react'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import styles from './Menu.module.scss'
import { BsSunFill, BsMoonFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import '../../styles-dark.scss'
import React from 'react'

export default function Menu() {
  const rotas = [
    {
      label: 'Home',
      to: '/'
    },
    {
      label: 'Cardapio',
      to: '/Cardapio'
    },
    {
      label: 'Sobre',
      to: '/Sobre'
    }
  ]

  const [isDarkMode, setIsDarkMode] = useState(false)
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.body.classList.toggle('dark', !isDarkMode)
  }

  return (
    <nav className={styles.menu}>
      <Logo />
      <ul className={styles.menu__list}>
        {rotas.map((rota, index) => (
          <li
            key={index}
            className={`__link ${isDarkMode ? 'dark' : styles.menu__link}`}
          >
            <Link to={rota.to}> {rota.label} </Link>
          </li>
        ))}
      </ul>

      <button
        className={`${styles.square_button} ${styles.dark_button}`}
        onClick={toggleDarkMode}
      >
        {isDarkMode ? <BsSunFill /> : <BsMoonFill />}
      </button>
    </nav>
  )
}
