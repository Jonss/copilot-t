import { PokemonType } from '../types/enum';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';
import hexToRgba from 'hex-to-rgba';

const fullConfig = resolveConfig(tailwindConfig);

const {
  electric,
  normal,
  fire,
  fighting,
  ice,
  water,
  poison,
  grass,
  ground,
  flying,
  psychic,
  bug,
  rock,
  dragon,
  ghost,
  dark,
  steel,
  fairy,
} = fullConfig.theme.colors;

const typeColors: Record<PokemonType, string> = {
  [PokemonType.Electric]: electric,
  [PokemonType.Normal]: normal,
  [PokemonType.Fire]: fire,
  [PokemonType.Water]: water,
  [PokemonType.Grass]: grass,
  [PokemonType.Ice]: ice,
  [PokemonType.Fighting]: fighting,
  [PokemonType.Poison]: poison,
  [PokemonType.Ground]: ground,
  [PokemonType.Flying]: flying,
  [PokemonType.Psychic]: psychic,
  [PokemonType.Bug]: bug,
  [PokemonType.Rock]: rock,
  [PokemonType.Ghost]: ghost,
  [PokemonType.Dragon]: dragon,
  [PokemonType.Dark]: dark,
  [PokemonType.Steel]: steel,
  [PokemonType.Fairy]: fairy,
};

const colorTypeToRgba = (type: PokemonType, alpha: string) =>
  hexToRgba(typeColors[type], alpha);

export { colorTypeToRgba };
