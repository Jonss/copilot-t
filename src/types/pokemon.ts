import { PokemonType } from "./enum";

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

const parseJsonToPokemonDetails = (pokemonJson?: any): PokemonDetails => {
    if (!pokemonJson) return {} as PokemonDetails;

    const { id, name, types, abilities, sprites } = pokemonJson;
  
    const transformedTypes = types.map((typeObj: any) => typeObj.type.name);
  
    const transformedAbilities = abilities.map((moveObj: any) => {
        return {
            name: moveObj.ability.name,
            isHidden: moveObj.is_Hidden,
        }
    });
  
    const mainSprite = sprites.other['official-artwork'].front_shiny;
  
    const transformedVersions = Object.entries(sprites.versions).flatMap(
      ([_, generationData]) =>
        Object.entries(generationData as Record<string, any>)
            .filter(g => !(g[0].includes('icons')))
            .map(([name, sprites]) => ({
                name, 
                front: sprites.front_default || '',
                back: sprites.back_default,
            })
        )
    ).filter(t => t.front);
  
    return {
      id,
      name,
      types: transformedTypes,
      abilities: transformedAbilities,
      images: {
        main: mainSprite,
        versions: transformedVersions,
      },
    };
  };

export type {
    DisplayPokemon,
    PokemonDetails,
};

export {
    parseJsonToPokemonDetails,
}