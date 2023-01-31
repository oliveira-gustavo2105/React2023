function Form() {

    function cadastrarUsuario(e){
        e.preventDefault()
        alert("funfou o cadastro")
    }

    return(
        <div>
            <h1>Cadastros:</h1>
            <form onSubmit={cadastrarUsuario}>
            <div>
            <input type="text" placeholder="Digite o nome" />
        </div>
        <div>
            <input type="submit" value="Cadastrar" />

        </div>
        </form>
        </div> 
    )

}

export default Form