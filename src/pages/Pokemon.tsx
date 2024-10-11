import React from 'react';
import { redirect, useParams } from 'react-router-dom';
import { useFetchSinglePokemon } from '../hooks/useFetchSinglePokemon';
import { PokeCard } from '../components/PokeCard';
import { colorTypeToRgba } from '../utils/colors';
import { Loading } from '../components/ui/Loading';
import NotFound from './404';

function Pokemon() {
  const { pokemonName } = useParams();

  if (!pokemonName) redirect('/not-found');

  const { pokemon, isLoading, error } = useFetchSinglePokemon(pokemonName!);

  if (error) return <NotFound />;

  if (isLoading) return <Loading />;

  const bgColor = colorTypeToRgba(pokemon.types[0], '0.2');

  return (
    <div style={{ background: bgColor }} className="h-screen md:pt-12">
      <PokeCard pokemon={pokemon} />
    </div>
  );
}

export default Pokemon;
