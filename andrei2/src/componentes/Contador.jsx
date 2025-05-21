import { useState } from "react"
import Escopo from "./Escopo"
import EscopoReduz from "./EscopoReduz";

function Contador(){
    
    const[valor, setValor] = useState(false);
    const alternarComponente = () => {
        
    }


    return (
        <>
        <div>
            <button onClick={()=> setValor(!valor)}>
                {valor ? "Tung Tung..." : "Aligatore Volante..."}
            </button>
            {valor && <Escopo/>}
            {setValor && <EscopoReduz/>}
        </div>
        </>
    )    
}


    // // Componente Principal
    // function App() {
    //     const [estagio, setEstagio] = useState(0);
  
    //     const alternarComponente = () => {
    //       setEstagio((prev) => (prev + 1) % 3); // Alterna entre 0, 1, 2
    //     };
  
    //     return (
    //       <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
    //         <button
    //           onClick={alternarComponente}
    //           className="mb-4 px-6 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition"
    //         >
    //           Alternar Componente
    //         </button>
    //         {estagio === 1 ? <ComponenteA /> : estagio === 2 ? <ComponenteB /> : null}
    //       </div>
    //     );
    //   }
  
export default Contador