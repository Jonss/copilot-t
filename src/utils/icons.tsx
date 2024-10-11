import { PokemonType } from "../types/enum";
import { 
    Squirrel, 
    Zap, 
    Flame, 
    Droplet, 
    Leaf, 
    Snowflake, Mountain, Weight, Baby, Bug, Sprout, Bird, Eye, Ghost, Sword, Moon, TestTube, Cloudy
} from "lucide-react";
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config';

const fullConfig = resolveConfig(tailwindConfig)

const {
    electric,
    normal, 
    fire,
    fighting,
    ice,
    water,
    poison,
    grass,
    ground,
    flying,
    psychic,
    bug,
    rock,
    dragon,
    ghost,
    dark,
    steel,
    fairy,
} = fullConfig.theme.colors;

export const typeIcons: Record<PokemonType, JSX.Element> = {
    [PokemonType.Electric]: <Zap color={electric} className="w-4 h-4"/>,
    [PokemonType.Normal]: <Squirrel color={normal} className="w-4 h-4"/>,
    [PokemonType.Fire]: <Flame color={fire} className="w-4 h-4"/>,
    [PokemonType.Water]: <Droplet color={water} className="w-4 h-4"/>,
    [PokemonType.Grass]: <Leaf color={grass} className="w-4 h-4"/>,
    [PokemonType.Ice]: <Snowflake color={ice} />,
    [PokemonType.Fighting]: <Sword color={fighting} className="w-4 h-4"/>,
    [PokemonType.Poison]: <TestTube color={poison} className="w-4 h-4"/>,
    [PokemonType.Ground]: <Sprout color={ground}className="w-4 h-4"/>,
    [PokemonType.Flying]: <Bird color={flying} className="w-4 h-4" />,
    [PokemonType.Psychic]: <Eye color={psychic} className="w-4 h-4"/>,
    [PokemonType.Bug]: <Bug color={bug} className="w-4 h-4"/>,
    [PokemonType.Rock]: <Mountain color={rock} className="w-4 h-4"/>,
    [PokemonType.Ghost]: <Ghost color={ghost} className="w-4 h-4"/>,
    [PokemonType.Dragon]: <Cloudy color={dragon} className="w-4 h-4"/>,
    [PokemonType.Dark]: <Moon color={dark} className="w-4 h-4"/>,
    [PokemonType.Steel]: <Weight color={steel} className="w-4 h-4"/>,
    [PokemonType.Fairy]: <Baby color={fairy} className="w-4 h-4"/>
};