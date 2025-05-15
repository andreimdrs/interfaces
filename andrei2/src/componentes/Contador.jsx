import { useState } from "react"
import Escopo from "./Escopo"

export default function Contador(){
    
    let[valor, setValor] = useState(false)


    return (
        <>
        <div>
            <h1>teste</h1>
        </div>
            valor ? <Escopo/> : <EscopoReduz/>
                <div>
                    <button onClick={() => setValor(true, false)}>Hora de Mudar!!!!!!!!!!!!!!!</button>
                </div>
        </>
    )
    
}