import { useQuery } from "@tanstack/react-query";
import { ONE_MINUTE } from "../utils/consts";
import { fetchSinglePokemon } from "../service/pokeapi.service";
import { PokemonDetails, parseJsonToPokemonDetails } from "../types/pokemon";

export const useFetchSinglePokemon = (name: string) => {
    const { data, isLoading, error } = useQuery<PokemonDetails>({
        queryKey: ['pokemon', name],
        queryFn: async () => {
            const resp = await fetchSinglePokemon(name)
            if (!resp.ok) {
                throw new Error("failed to fetch pokemon API")
            }
            return await resp.json();
        },
        staleTime: ONE_MINUTE,
    });

    const pokemon = parseJsonToPokemonDetails(data);

    return {
        pokemon,
        isLoading,
        error,
    }

}