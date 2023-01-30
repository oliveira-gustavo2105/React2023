import './App.css';
import Pessoa from './components/Pessoa';
import TesteTexto from './components/TesteTexto';
// import SalveMundo from './components/SalveMundo';
// import SayMyName from './components/SayMyName';


function App() {
  // const name="gugu"

  return (
    <div className="App">
      <h1>Estudando React Segundo Dia</h1>
      <br></br>

      <TesteTexto/>
      <Pessoa 
      nome="Guga"
      idade="19"
      profissao="Dev"
      foto="C:\Users\gugat\Pictures\eu.jpeg"
      />
    
    </div>
  );
}

export default App
