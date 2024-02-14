import { useParams } from "react-router-dom";
import { usePokemonDetailQuery } from "../query-hooks";

export default function PokemonDetailPage() {
  const { pokemonId: id } = useParams<{ pokemonId: string }>();
  const pokemonDetail = usePokemonDetailQuery(id);

  if (pokemonDetail.isLoading) {
    return <p>Loading</p>;
  }

  const { data: pokemon } = pokemonDetail;
  if (pokemonDetail.error || !pokemon) {
    return <p>Error</p>;
  }

  return (
    <>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.image} />

      <p>Attack: {pokemon.stats.attack}</p>
      <p>Defense: {pokemon.stats.defense}</p>
      <p>HP: {pokemon.stats.hp}</p>
      <p>Speed: {pokemon.stats.speed}</p>
    </>
  );
}
