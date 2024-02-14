import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { PokemonDetail } from "./types";

interface PokemonListResponse {
  results: PokemonDetail[];
}

const sleep = () => new Promise((resolve) => setTimeout(resolve, 1000));

export function usePokemonListQuery({ offset = 0 }: { offset: number }) {
  return useQuery({
    queryKey: ["pokemons", { offset }],
    queryFn: async () => {
      await sleep();
      const response = await fetch(
        `https://pokeapi.fly.dev/gpichot-2024-02-12/pokemons?offset=${offset}`
      );

      return response.json() as Promise<PokemonListResponse>;
    },
    placeholderData: keepPreviousData,
    staleTime: 10 * 1000,
  });
}
