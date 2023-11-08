import { useQuery } from "react-query";
import { getPokemon, getPokemonList } from "./api.service";

export const useGetPokemonListQuery = () =>
  useQuery({
    queryKey: ["getPokemonList"],
    queryFn: getPokemonList,
  });

export const useGetPokemonQuery = (id: number) =>
  useQuery({
    queryKey: ["getPokemon", { id }],
    queryFn: () => getPokemon(id),
    onSuccess: (result) => console.log("getPokemon success", result)
  });
