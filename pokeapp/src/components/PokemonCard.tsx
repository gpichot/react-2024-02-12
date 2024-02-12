import { PokemonDetail } from '../types';

interface PokemonCardProps {
  pokemon: PokemonDetail;
}

export default function PokemonCard(props: PokemonCardProps) {
  const { image, name, types } = props.pokemon;

  return <div>
    <img src={image} alt={name} />
    <h2>{name}</h2>
    <p>{types.join(', ')}</p>
  </div>
}
