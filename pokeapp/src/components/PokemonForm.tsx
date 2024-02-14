import { useState } from "react";
import InputControl from "./InputControl";
import { useCreatePokemonMutation } from "../mutation-hooks";
import { useNavigate } from "react-router-dom";

export default function PokemonForm() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const createPokemon = useCreatePokemonMutation();
  const navigate = useNavigate();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log({ name, type, weight, height });
    const payload = { name, type, weight, height };

    createPokemon.mutate(payload, {
      onSuccess: (data) => {
        navigate(`/pokemons/${data.id}`);
      },
    });
  };

  const isSubmitDisabled = !name || !type || createPokemon.isPending;

  return (
    <form onSubmit={handleSubmit}>
      <InputControl
        label="Name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <p>{name}</p>
      <InputControl
        label="Type"
        name="type"
        value={type}
        onChange={(e) => setType(e.target.value)}
        required
      />
      <InputControl
        label="Weight"
        name="weight"
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.valueAsNumber)}
      />
      <InputControl
        label="Height"
        name="height"
        type="number"
        value={height}
        onChange={(e) => setHeight(Number(e.target.valueAsNumber))}
      />
      <button type="submit" disabled={isSubmitDisabled}>
        Submit
      </button>
    </form>
  );
}
