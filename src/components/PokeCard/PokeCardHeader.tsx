import { FC } from "react";
import { formatNumberToPokedex, toCapital } from "../../utils/stringUtils";
import { colorTypeToRgba } from "../../utils/colors";
import { PokemonType } from "../../types/enum";

type Props = {
    id: number;
    name: string;
    types: PokemonType[];
}

export const PokeCardHeader: FC<Props> =({ id, name, types }) => {
    return (
        <header>
            <div style={{ background: colorTypeToRgba(types[0], "0.8")}} className={`flex justify-between md:justify-normal md:space-x-4 w-full p-4 rounded-t-lg`}>
                <h1 className="text-2xl text-bold">{toCapital(name)}</h1>
                <h2 className="text-2xl text-bold">{formatNumberToPokedex(id)}</h2>
            </div>
        </header>
    )
}