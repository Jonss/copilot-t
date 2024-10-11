import { FC } from "react";
import { Link } from "react-router-dom";
import { toCapital } from "../utils/stringUtils";
import { DisplayPokemon } from "../types/pokemon";

type Props = {
   pokemon: DisplayPokemon;
}

export const PokeRow: FC<Props> = ({ pokemon }) => {
    const { name, url} = pokemon;
    return (
        <tr key={name} className="p-2">
            <td className="border border-slate-300">
                <span className="text-xl">{toCapital(name)}</span>
            </td>
            <td className="border border-slate-300"><Link to={url}>{url}</Link></td>
        </tr>
    );
}