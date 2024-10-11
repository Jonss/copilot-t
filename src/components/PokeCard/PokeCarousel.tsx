import React, { FC } from 'react';
import { Carousel } from '../ui/Carousel';
import { PokemonType } from '../../types/enum';
import { toCapital } from '../../utils/stringUtils';
import { colorTypeToRgba } from '../../utils/colors';

type Props = {
  type: PokemonType;
  images: {
    name: string;
    front: string;
    back: string;
  }[];
};

export const PokeCarousel: FC<Props> = ({ type, images }) => {
  const bgColor = colorTypeToRgba(type, '0.8');

  if (!images.length) return null;

  return (
    <div className={`w-full rounded`} style={{ background: bgColor }}>
      <Carousel arrowColor="#000">
        {images.map((v) => (
          <div
            className="flex flex-col items-center py-4 w-full space-y-4"
            key={v.name}
          >
            <h4 className="text-lg text-semibold text-white">
              {toCapital(v.name)}
            </h4>
            <div className={`flex bg-${type}/20 p-2`}>
              {v.front && (
                <img
                  src={v.front}
                  alt={`${name}_${v.name}_front`}
                  className="w-32 h-32"
                />
              )}
              {v.back && (
                <img
                  src={v.back}
                  alt={`${name}_${v.name}_back`}
                  className="w-32 h-32"
                />
              )}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
