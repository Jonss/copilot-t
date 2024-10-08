import { FC } from "react";
import { Link } from "react-router-dom";
import { toCapital } from "../utils/stringUtils";


type Props = {
    name: string;
    url: string;
}

export const PokeRow: FC<Props> = ({ name, url }) => {
    return (
        <tr key={name} className="p-2">
            <td className="border border-slate-300">
                <span className="text-xl">{toCapital(name)}</span>
            </td>
            <td className="border border-slate-300"><Link to={url}>{url}</Link></td>
        </tr>
    );
}