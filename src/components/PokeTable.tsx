import React, { FC } from 'react';
import { PokeRow } from './PokeRow';
import { DisplayPokemon } from '../types/pokemon';

type Props = {
  pokemon: DisplayPokemon[] | undefined;
};

export const PokeTable: FC<Props> = ({ pokemon }) => {
  if (!pokemon) return null;

  return (
    <table className="table-auto border w-full">
      <thead>
        <tr>
          <th>
            <span className="text-poke-red">Name</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {pokemon.map((p) => (
          <PokeRow pokemon={p} key={p.url} />
        ))}
      </tbody>
    </table>
  );
};
