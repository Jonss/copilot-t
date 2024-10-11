import { FC } from "react";
import { Link } from "react-router-dom";
import { toCapital } from "../utils/stringUtils";
import { DisplayPokemon } from "../types/pokemon";

type Props = {
   pokemon: DisplayPokemon;
}

export const PokeRow: FC<Props> = ({ pokemon }) => {
    const { name } = pokemon;
    return (
        <tr key={name} className="text-poke-blue hover:text-white">
            <td className="border p-2 hover:bg-cyan-400 ">
                <Link to={`/${name}`}>
                    <span className="text-xl">{toCapital(name)}</span>
                </Link>
            </td>
        </tr>
    );
}