import { FC } from "react";
import { PokeRow } from "./PokeRow";


type Props = {
    pokemon: {
        name: string;
        url: string;
    }[];
}

export const PokeTable: FC<Props> = ({ pokemon }) => {
   return  (
    <table className="table-auto border border-collapse border-slate-300">
        <thead>
            <tr>
                <th><span className="text-red-500">Name</span></th>
                <th>URL</th>
            </tr>
        </thead>
        <tbody>
            {pokemon.map(p => <PokeRow name={p.name} url={p.url} key={p.url} />)}
        </tbody>
    </table>
   )
}