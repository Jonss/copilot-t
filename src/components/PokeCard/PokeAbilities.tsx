import React, { FC } from 'react';
import { PokemonType } from '../../types/enum';
import { typeIcons } from '../../utils/icons';
import { toCapital } from '../../utils/stringUtils';

type Props = {
  type: PokemonType;
  abilities: {
    name: string;
    isHidden: boolean;
  }[];
};

export const PokeAbilities: FC<Props> = ({ type, abilities }) => {
  return (
    <div className="w-full rounded">
      <table
        className={`border-collapse border border-separated border-${type}/80 w-full border-spacing-2 table-auto`}
      >
        <thead>
          <tr className="">
            <th className={`text-xl text-semibold mb-2 text-${type}`}>
              Abilities
            </th>
          </tr>
        </thead>
        <tbody>
          {abilities.map(({ name, isHidden }) => (
            <tr className="p-8" key={name}>
              <td key={name} className="border p-4">
                <span className="flex space-x-2 items-center">
                  {typeIcons[type]}
                  <span className={`text-${type}`}>
                    {toCapital(name, ' ')}{' '}
                    {isHidden && (
                      <span className="text-xs"> - Hidden ability</span>
                    )}
                  </span>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
