import React, { FC } from 'react';
import { PokemonType } from '../../types/enum';
import { toCapital } from '../../utils/stringUtils';
import { Badge } from '../ui/Badge';
import { colorTypeToRgba } from '../../utils/colors';

type Props = {
  types: PokemonType[];
};

export const PokeTypes: FC<Props> = ({ types }) => {
  return (
    <div className="p-4 space-y-2">
      <h3 className="text-xl text-semibold">
        {types.length > 1 ? 'Types' : 'Type'}
      </h3>
      {types.map((type) => (
        <Badge
          title={toCapital(type)}
          bgColor={colorTypeToRgba(type, '1')}
          key={type}
        />
      ))}
    </div>
  );
};
