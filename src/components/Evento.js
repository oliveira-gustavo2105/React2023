function Evento(){

    function meuEvento(){
        alert("Funfou")
    }

    return(
        <div>
            <p>Da um clique ae:</p>
            <button onClick={meuEvento}>Funfar!</button>
        </div>
    )
}

export default Evento