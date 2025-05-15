const EscopoReduz = () => {
    function handleclick(){
        return (
            alert("handleClick")
        )
            
    }

    <div>
        <img src="./images.jpg" alt=""/>
        <h1>TUNG TUNG TUNG SAHUR</h1>
    </div>
    
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