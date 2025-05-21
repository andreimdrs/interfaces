import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EscopoReduz from './componentes/EscopoReduz'
import Escopo from './componentes/Escopo'
import Contador from './componentes/contador'
import Props from './componentes/Props'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <Contador/> */}
      <Props nome={2} newname={"testestestetse"} atributo={"forte"}/>
    </>
  )
}

export default App
