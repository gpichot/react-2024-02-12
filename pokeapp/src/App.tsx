import "./App.css";
import { pokemons } from "./mocks";
import PokemonList from "./components/PokemonList";
import PokemonCard from "./components/PokemonCard";
import React from "react";
import PokemonForm from "./components/PokemonForm";

function App() {
  return (
    <>
      <PokemonForm />
      <PokemonList>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </PokemonList>
    </>
  );
}

export default App;
