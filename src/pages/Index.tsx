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

    return (
        <div>
            <header className="bg-poke-red py-4">
                <h1 className="text-white text-bold text-2xl text-center">Pokedex</h1>
            </header>
            <div className="w-full bg-white flex flex-col items-center px-10 pt-10">
                <PokeTable pokemon={pokemon} />
            </div>
        </div>
    )
    
}

export default Index;