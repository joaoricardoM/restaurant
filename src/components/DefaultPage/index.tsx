import styles from './default.module.scss'
import { Outlet } from 'react-router-dom'
import stylesTema from '../../styles/Tema.module.scss'

export default function Default() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>JRM La Trattoria</div>
      </header>
      <div className={stylesTema.container}>
        <Outlet />
      </div>
    </>
  )
}
