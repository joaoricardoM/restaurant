import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Cardapio from './pages/Cardapio'
import Menu from './components/Menu'
import Default from './components/DefaultPage'

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Default />}>
            <Route index element={<Home />} />
            <Route path="Cardapio" element={<Cardapio />} />
          </Route>
        </Routes>
      </Router>
    </main>
  )
}
