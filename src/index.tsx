import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './styles-dark.scss'
import Cardapio from './pages'
import Home from './pages/home'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)
