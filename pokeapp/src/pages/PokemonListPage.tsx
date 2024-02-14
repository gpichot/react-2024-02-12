import PokemonList from "../components/PokemonList";
import PokemonCard from "../components/PokemonCard";
import { useParams } from "react-router-dom";
import React from "react";
import { usePokemonListQuery } from "../query-hooks";

const MemoizedPokemonCard = React.memo(PokemonCard, (prevProps, nextProps) => {
  return prevProps.pokemon.id === nextProps.pokemon.id;
});

export default function PokemonListPage() {
  const params = useParams();
  const [count, setCount] = React.useState(0);

  const pokemonsList = usePokemonListQuery({ offset: count });

  if (pokemonsList.isLoading) {
    return <p>Chargement en cours</p>;
  }

  const { data: pokemons } = pokemonsList;
  if (pokemonsList.error || !pokemons) {
    return <p>Erreur</p>;
  }

  return (
    <>
      <h1>Bonjour dresseur {params.name}</h1>
      <button onClick={() => setCount((c) => c + 1)}>update</button>
      <button onClick={() => pokemonsList.refetch()}>Refetch</button>
      {pokemonsList.isFetching && "Rechargement"}
      <PokemonList>
        {pokemons.results.map((pokemon) => (
          <MemoizedPokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </PokemonList>
    </>
  );
}
