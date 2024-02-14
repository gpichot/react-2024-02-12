import { Link } from "react-router-dom";
import { PokemonDetail } from "../types";
import styles from "./PokemonCard.module.css";

interface PokemonCardProps {
  pokemon: PokemonDetail;
}

export default function PokemonCard(props: PokemonCardProps) {
  const { pokemon } = props;
  const { image, name, types } = props.pokemon;

  return (
    <div className={styles.pokemonCard}>
      <img src={image} alt={name} />
      <h2 className={styles.name}>{name}</h2>
      <p>{types.join(", ")}</p>
      <Link to={`/pokemons/${pokemon.id}`}>Détail</Link>
    </div>
  );
}
