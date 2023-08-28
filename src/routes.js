import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Cardapio from './pages'

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cardapio" element={<Cardapio />} />
      </Routes>
    </Router>
  )
}
