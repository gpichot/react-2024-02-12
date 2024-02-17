import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import PokemonCard from "./PokemonCard";
import { pokemons } from "../mocks";
import { MemoryRouter } from "react-router-dom";

describe("PokemonCard", () => {
  it("renders pokemon details", () => {
    render(
      <MemoryRouter>
        <PokemonCard pokemon={pokemons[0]} />
      </MemoryRouter>
    );

    expect(screen.getByText("bulbasaur")).toBeVisible();
    expect(screen.getByText("grass, poison")).toBeVisible();
  });
});
