import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PokemonDetail } from "./types";

interface CreatePokemonPayload {
  name: string;
  type: string;
  weight?: number;
  height?: number;
}

export function useCreatePokemonMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: CreatePokemonPayload) => {
      const response = await fetch(
        "https://pokeapi.fly.dev/gpichot-2024-02-12/pokemons",
        {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.json() as Promise<PokemonDetail>;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["pokemons"],
      });
    },
  });
}

export function useUpdatePokemonMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: CreatePokemonPayload) => {
      const response = await fetch(
        "https://pokeapi.fly.dev/gpichot-2024-02-12/pokemons",
        {
          method: "PUT",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.json() as Promise<PokemonDetail>;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["pokemons"],
      });
    },
  });
}
