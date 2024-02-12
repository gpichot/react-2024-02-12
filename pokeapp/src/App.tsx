import './App.css'
import { pokemons } from './mocks'
import PokemonList from './components/PokemonList'
import PokemonCard from './components/PokemonCard'

function App() {

  return (
    <>
      <PokemonList>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </PokemonList>
    </>
  )
}

export default App
