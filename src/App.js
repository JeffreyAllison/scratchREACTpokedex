import { useEffect, useState } from 'react';
import './App.css';
import { getPokemon } from './services/fetch-utils';
import LoadingSpinner from './LoadingSpinner';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [query, setQuery] = useState('');
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  //console.log(pokemon);

  async function load() {
    setLoadingSpinner(true);
    const {
      data: { results },
    } = await getPokemon(query);

    setLoadingSpinner(false);

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
        {loadingSpinner ? (
          <LoadingSpinner />
        ) : (
          pokemon.map(
            ({ pokemon, height, weight, hp, shape, type_1, type_2, ability_1, url_image }, i) => (
              <div className="pokemon" key={pokemon + i}>
                <h3>Name: {pokemon}</h3>
                <p>Height: {height}</p>
                <p>Weight: {weight}</p>
                <p>Health: {hp}</p>
                <p>Shape: {shape}</p>
                <p>Type 1: {type_1}</p>
                <p>Type 2: {type_2}</p>
                <p>Ability 1: {ability_1}</p>
                <img src={url_image} />
              </div>
            )
          )
        )}
      </header>
    </div>
  );
}

export default App;
