import { useState } from "react"

function Form() {
    function cadastrarUsuario(e){
        e.preventDefault()
       alert('Nickname de cadastro: '+ name +  '\n Senha: ' + password)
    }
    const[name, setName] = useState()
    const[password, setPassword] = useState()
    
    return(
        <div>
            <h1>Cadastros:</h1>
            <form onSubmit={cadastrarUsuario}>
            <div>
                <label htmlFor="name">Nick:</label>
                <br></br>
            <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Digite o nome"
            onChange={(e) => setName(e.target.value)} />
        </div>
        <br></br>
        <div>
            <label htmlFor="password">Senha:</label>
            <br></br>
            <input 
            type="password" 
            id="password" 
            name="password" 
            placeholder="Manda a senha ai"
            onChange={(e) => setPassword(e.target.value)}
             />
        </div>
        <br></br>
        <div>
            <input type="submit" value="Cadastrar" />

        </div>
        </form>
        </div> 
    )

}

export default Form