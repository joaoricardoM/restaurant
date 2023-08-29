import styles from './default.module.scss'
import { Outlet } from 'react-router-dom'

export default function Default() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>JRM La Trattoria</div>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  )
}
