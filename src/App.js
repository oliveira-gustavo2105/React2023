import './App.css';
import Pessoa from './components/Pessoa';
import SalveMundo from './components/SalveMundo';
import SayMyName from './components/SayMyName';

function App() {
  const name="gugu"

  return (
    <div className="App">
      <h1>Estudando React Segundo Dia</h1>
      <br></br>

      <SayMyName nome="Guga" />
      <SayMyName nome={name} />
      <Pessoa 
      nome="Guga"
      idade="19"
      profissao="Dev"
      foto="https://via.placeholder.com/150"
      />
    
    </div>
  );
}

export default App
