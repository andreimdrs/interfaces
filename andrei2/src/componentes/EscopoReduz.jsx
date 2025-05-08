const EscopoReduz = () => {
    function handleclick(){
        return (
            alert("handleClick")
        )
            
    }
    return (
        <>
            <button onClick={() => alert("clicou")}>Clique aqui</button>
            <div>
                <button onClick={handleclick}>handleclick</button>
            </div>
        </>
    )
}

export default EscopoReduz