import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Cardapio from './pages/Cardapio'
import Menu from './components/Menu'
import Default from './components/DefaultPage'
import Sobre from './pages/Sobre'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'
import Prato from './pages/Pratos'
import Admin from './pages/Admin'
import React from 'react'

export default function AppRouter() {
  return (
    <main className="container">
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Default />}>
            <Route index element={<Home />} />
            <Route path="/admin/:user" element={<Admin />} />
            <Route path="Cardapio" element={<Cardapio />} />
            <Route path="Sobre" element={<Sobre />} />
          </Route>
          <Route path="prato/:id" element={<Prato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  )
}
