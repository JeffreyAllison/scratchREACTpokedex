import { useEffect, useState } from 'react';
import './App.css';
import { getPokemon } from './services/fetch-utils';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [query, setQuery] = useState('');
  //console.log(pokemon);

  async function load() {
    const {
      data: { results },
    } = await getPokemon(query);

    setPokemon(results);
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleSearchPokemon(e) {
    e.preventDefault();
    load();
  }

  return (
    <div className="App">
      <form onSubmit={handleSearchPokemon}>
        <input onChange={(e) => setQuery(e.target.value)} />
        <button>Search Pokemon</button>
      </form>
      <header className="app-header">
        {pokemon.map(({ pokemon, height, weight, hp, shape }, i) => (
          <div className='pokemon' key={pokemon + i}>
            <h3>Name: {pokemon}</h3>
            <p>Height: {height}</p>
            <p>Weight: {weight}</p>
            <p>Health: {hp}</p>
            <p>Shape: {shape}</p>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
