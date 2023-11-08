import { useState, useEffect } from "react";
import axios from "axios";
import { Pokemon } from "./Layout";
import { Card, CardContent } from "./ui/card";

interface ImageProps {
  pokemon: Pokemon | undefined
}

export const ImageContainer = ({ pokemon }: ImageProps) => {
  useEffect(() => {
    getDetails()
  }, []);

  async function getDetails() {
    // console.log("getDetails ", pokemon?.species);
    //const pResponse = await axios.get(pokemon.species); //retrieve the randomly generated pokemon
    //console.log("pResponse ", pResponse);
  }

  return (
    <Card>
      <CardContent>
        {pokemon?.img && (
          <img className="img" src={pokemon?.img} alt={pokemon?.name} />
        )}
      </CardContent>
    </Card>
  );
};
