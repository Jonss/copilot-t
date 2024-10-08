import { useEffect, useState } from "react";
import { fetchPokemon } from "../service/pokeapi.service";
import { PokeTable } from "../components/PokeTable";

function Index() {

    const [pokemon, setPokemon] = useState([]);
    const [hasError, setHasError] = useState<boolean>(false)

    useEffect(() => {
        fetchPokemon().then(resp => resp.json()).then(r => setPokemon(r.results)).catch(() => setHasError(true));
    }, []);

    if(hasError) {
        return <div className="h-screen justify-center align-center">Not found</div>
    }

    return <PokeTable pokemon={pokemon} />
}

export default Index;