
import { useState } from "react";

function ClickCount (){    
    
    const [count, setCount] = useState(0)

    const [isButtonActive, setIsButtonActive] = useState(false);

    if (count > 9) {
        setIsButtonActive(isButtonActive=true)
        } 
    if (count < 0) {
            setIsButtonActive(isButtonActive=false)
        }

    const incrementar = () => {
        setCount(count + 1)
    }
    const decrementar = () => {
        setCount(count - 1)
    }

    const buttonStyle = {
        backgroundColor: isButtonActive ? 'green' : 'red'
    }


    return (
        <div>
            <h1>Cliques: {count}</h1>
            <button style={buttonStyle} onClick={incrementar}>Adicionar</button>
            <button onClick={decrementar}>Remover</button>
        </div>
    )

}

export default ClickCount