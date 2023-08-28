import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Cardapio from './pages/Cardapio'
import Menu from './components/Menu'
import styles from './routes.module.scss'

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Menu />
        <header className={styles.header}>
          <div className={styles.header__text}>JRM La Trattoria</div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cardapio" element={<Cardapio />} />
        </Routes>
      </Router>
    </main>
  )
}
