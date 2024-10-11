import { FC } from "react";
import { Link } from "react-router-dom";
import { toCapital } from "../utils/stringUtils";
import { DisplayPokemon } from "../types/pokemon";
import { useFetchSinglePokemon } from "../hooks/useFetchSinglePokemon";
import { Badge } from "./ui/Badge";
import { colorTypeToRgba } from "../utils/colors";
import { Spinner } from "./ui/Spinner";

type Props = {
   pokemon: DisplayPokemon;
}

export const PokeRow: FC<Props> = ({ pokemon }) => {
    const { name } = pokemon;

    const { pokemon: pokemonDetails, isLoading } = useFetchSinglePokemon(pokemon?.name)

    return (
        <tr key={name} className="text-poke-blue hover:text-white">
            <td className="border p-2 hover:bg-cyan-400 ">
                <Link to={`/${name}`}>
                    <div className="flex justify-between items-center">
                        <span className="text-xl">{toCapital(name)}</span>
                        <div className="space-x-2 text-white">
                            {isLoading ? 
                                <Spinner classname="text-poke-blue" /> :
                                pokemonDetails.types.map(t => 
                                    <Badge bgColor={colorTypeToRgba(t, "1")} key={t} title={toCapital(t)} />
                                )
                            }
                        </div>
                    </div>
                </Link>
            </td>
        </tr>
    );
}