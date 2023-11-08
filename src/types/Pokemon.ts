export type Pokemon = {
    name: string,
    weight: number,
    height: number,
    id: number,
    abilities: Abilities[],
    // forms: 
    // moves: 
    types: string[];

    img: string;

    species: string
  }

  export type Abilities = {
    name: string;
    url: string;
    isHidden: boolean;
    slot: number;
  }