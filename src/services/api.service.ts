import { Pokemon } from "@/components/Layout";
import { api } from "@/lib/api";

export const getPokemonList = async (): Promise<any> => {
  const { data } = await api.get("/pokemon");
  return data;
};

export const getPokemon = async (id : number): Promise<Pokemon> => {
  const { data  } = await api.get("/pokemon/"+id);
  console.log("getPokemon ", data);
  return data;
};
