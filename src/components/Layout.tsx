import axios from "axios";
import { useState, useEffect } from "react";

import { ImageContainer } from "./ImageContainer";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Dices } from "lucide-react";
import { useGetPokemonQuery } from "@/services/queries.service";

const TOTAL_POKEMON = 1000;

export interface Pokemon {
  name: string;
  height: number;
  id: number;
  img: string;
  types: string[];
  species: string
}

export interface Quote {
  quote: string;
  author: string;
}

export const Layout = () => {
  useEffect(() => {
    getRandom();
  }, []);

  const [pokemonId, setPokemonId] = useState(1);
  const { data: pokemon } = useGetPokemonQuery(pokemonId);

  async function getRandom() {
    let id = Math.floor(Math.random() * TOTAL_POKEMON); //random generate pokemon ID
    setPokemonId(id);
    
    // let url = API_ENDPOINT + id;
    // const pResponse = await axios.get(url); //retrieve the randomly generated pokemon
    // console.log("pResponse ", pResponse.data.species.url);

    // let text = pResponse.data.sprites.other.home.front_default
    // let sub = "https://raw.githubusercontent.com/PokeAPI/sprites/master/";
    // let imgURL =  text.lastIndexOf(sub) > 0 ? text.substr(sub.length) : pResponse.data.sprites.other.home.front_default;

    // let _pokemon: Pokemon = {
    //   name: pokemon.data.name,
    //   height: pokemon.data.height,
    //   img: pokemon,
    //   id: pokemon.data.id,
    //   types: pokemon.data.types.map(
    //     (type: { type: { name: string } }) => type.type.name
    //   ),
    //   species: pokemon.data.species.url
    // };
    
    // setPokemon(pokemon);
  }

  return (
    <Card className="align-middle  w-[350px]">
      <CardHeader>
        <CardTitle>Random xx Generator </CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <ModeToggle />
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <ImageContainer pokemon={pokemon} />
          </div>
          <div className="flex flex-col space-y-1.5"></div>
              {pokemon?.name}
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button variant={"outline"} title="Generate New" onClick={getRandom}>
          <Dices />
        </Button>
      </CardFooter>
    </Card>
  );
};
