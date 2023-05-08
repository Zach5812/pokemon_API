import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useState} from 'react'

function App() {
  const [pokemon, setPokemon] = useState([]);

  const showPokemon = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0').then(response => {
      setPokemon(response.data.results);
      console.log(response.data.results)
    })
      .catch(err => console.log(err))
  }

  return (
    <div style={{textAlign: "center"}}>
      <button onClick={showPokemon} >Fetch Pokemon</button>

      {pokemon.map(p=>
        <p>{p.name}</p>
      )}

    </div>
  );
}

export default App;
