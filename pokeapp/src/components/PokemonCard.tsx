import { PokemonDetail } from "../types";
import styles from "./PokemonCard.module.css";

interface PokemonCardProps {
  pokemon: PokemonDetail;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

export default function PokemonCard(props: PokemonCardProps) {
  const { onClick } = props;
  const { image, name, types } = props.pokemon;

  return (
    <div className={styles.pokemonCard} onClick={onClick}>
      <img src={image} alt={name} />
      <h2 className={styles.name}>{name}</h2>
      <p>{types.join(", ")}</p>
    </div>
  );
}
