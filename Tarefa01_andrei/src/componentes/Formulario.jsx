import React from "react";
import { useState } from "react";

function Formulario() {
    const [tarefa, setTarefa] = useState('')
    const [listas, setListas] = useState([])

    const handleChange = (e) => {
        setTarefa(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setListas([...listas, tarefa])
        alert('Formulário enviado! Tarefa: ' + tarefa);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Lista de Tarefas 
                <input type="text" value={tarefa} onChange={handleChange}/>
            </label>
            <input type="submit" value="enviar"/>
            {/* <p>{listas}</p> */}
            <ul>
                {listas.map((item) =>
                <p>{item}</p>
                )}
            </ul>
        </form>
    )
}

export default Formulario;