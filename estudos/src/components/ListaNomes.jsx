const ListaNomes = ({ nomes }) => {
    return (
        <div className="listaNomes">
            <h2>Lista Nomes</h2>
            {nomes.length === 0 ? (
                <p>Nenhum nome presente.</p>
            ) : (
                <ul>
                    {nomes.map((nome, indice) => (
                            <li key={indice}>{nome}</li>
                        ))}
                </ul>
            )}
        </div>
    )
}
export default ListaNomes;