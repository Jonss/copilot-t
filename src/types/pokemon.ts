import { PokemonType } from "./enum";

type PokemonList = {
    next: string | null;
    results: DisplayPokemon[];
};

type DisplayPokemon = {
    name: string;
    url: string;
};

type Ability = {
    name: string;
    isHidden: boolean;
}

type PokemonDetails = {
    id: number;
    name: string;
    types: PokemonType[];
    abilities: Ability[];
    images: {
        main: string;
        versions: {
            name: string,
            front: string,
            back: string,
        }[]
    }
}

export type {
    PokemonList,
    PokemonDetails,
    DisplayPokemon,
};

