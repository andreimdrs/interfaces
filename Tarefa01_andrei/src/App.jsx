import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componentes/Card'
import Formulario from './componentes/formulario'

function App() {

  return (
    <>
      <Card img='./src/assets/hugao.jpg' nome='soldado'/>
      <Formulario/>
    </>
  )
}

export default App
