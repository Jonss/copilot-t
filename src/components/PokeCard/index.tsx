import React, { FC } from 'react';
import { PokemonDetails } from '../../types/pokemon';
import { PokeCardHeader } from './PokeCardHeader';
import { PokemonType } from '../../types/enum';
import { PokeCarousel } from './PokeCarousel';
import { PokeAbilities } from './PokeAbilities';
import { PokeTypes } from './PokeTypes';

type Props = {
  pokemon: PokemonDetails;
};

export const PokeCard: FC<Props> = ({ pokemon }) => {
  const { name, id, types, images, abilities } = pokemon;
  const type = (types ?? types)[0] || PokemonType.Normal;
  return (
    <div className="rounded bg-white md:mx-24 pt-0 border rounded-lg shadow-xl">
      <PokeCardHeader name={name} id={id} types={types} />
      <PokeTypes types={types} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-4 md:p-8 p-4">
        <div
          className={`border border-${type} rounded-lg col-span-1 mb-4 md:mb-0`}
        >
          <img src={images.main} className="" />
        </div>
        <div className="col-span-2 w-full">
          <PokeCarousel type={type} images={images.versions} />
          <PokeAbilities abilities={abilities} type={type} />
        </div>
      </div>
    </div>
  );
};
