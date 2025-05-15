import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EscopoReduz from './componentes/EscopoReduz'
import Escopo from './componentes/Escopo'
import Contador from './componentes/contador'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Contador/>
    </>
  )
}

export default App
