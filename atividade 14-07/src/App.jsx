import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Saudacao from './components/Saudacao'
import Perfil from './components/Perfil'
import Contador from './components/Contador'
import Interruptor from './components/Interruptor'

function App() {

  return (
    <div>
      <Saudacao />
      <Perfil nome="João" />
      <Perfil nome="Vivi" />
      <Contador />
      <Interruptor />
    </div>
  )
}

export default App
