import {useState}from 'react';
import './App.css';
import {FiSearch} from "react-icons/fi";
import'./index.css';
import api from './search/api';

function App() {
  const[input,setInput]=useState('')
  const[cep, setCep]=useState({});

async function handleSearch(){
  if(input===''){
    alert("preencha com algum CEP!")
    return;
  }

  try{
    const response = await api.get('${input}/json');
   setCep(response.data)
   setInput("");

  }catch{
    alert("Ops houve um erro.")
    setInput("");

  }

}

  return (
    <div className="container">
     <h1 className='title'>Buscador de CEP</h1> 
     <div className="containerInput">
      <input
      type="text"
      placeholder="Digite o seu CEP..."
      value={input}
      onChange={(e)=> setInput(e.target.value)}
      />
     

      <button className="buttonsearch" onClick={handleSearch}>
       <FiSearch size={25} color="#FFF"/>
      </button>
  </div>
  
{Object.keys(cep).length > 1 && (
  <main className="main">
    <h2>CEP: {cep.cep}</h2>
    <span>{cep.logradouro}</span>
    <span>{cep.complemento}</span>
    <span>{cep.bairro}</span>
    <span>{cep.localidade}-{cep.uf}</span>
  </main> )}
  
    </div>
  );
}

export default App;
