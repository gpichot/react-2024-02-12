import { Meta, StoryObj } from "@storybook/react";
import PokemonCard from "./PokemonCard";
import { pokemons } from "../mocks";

const meta: Meta<typeof PokemonCard> = {
  title: "PokemonCard",
  component: PokemonCard,
};

export default meta;

type Story = StoryObj<typeof PokemonCard>;

export const Venusaur: Story = {
  args: {
    pokemon: pokemons[2],
  },
};
