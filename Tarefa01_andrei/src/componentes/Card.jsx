export default function Card(props) {
    
    const handleClick = () => {
        alert('Card clicado'); // Exemplo de ação
        // Se quiser navegar, use: window.location.href = props.link;
    };

    return(
        <>
            <div 
            className="card" 
            style={{width: '18rem', cursor: 'pointer' }}
            onClick={handleClick}>
                <div className="card-body">
                    <img src={props.img} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <p class="card-text">{props.nome}</p>
                    </div>
                </div>

            </div>
        </>
    )
}