import { PokeTable } from "../components/PokeTable";
import { Loading } from "../components/ui/Loading";
import { useFetchPokemon } from "../hooks/useFetchPokemon";
import NotFound from "./404";

function Index() {
    const {
        data: pokemon,
        error, 
        isLoading, 
    } = useFetchPokemon({ limit: 10, offset: 0});

    if(error) return <NotFound />
    if(isLoading) return <Loading />

    return <PokeTable pokemon={pokemon} />
}

export default Index;