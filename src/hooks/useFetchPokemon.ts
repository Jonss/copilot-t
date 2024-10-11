import { useQuery } from "@tanstack/react-query";
import { fetchPokemon } from "../service/pokeapi.service";
import { PokemonList } from "../types/pokemon";
import { ONE_MINUTE, POKEMON_QTY } from "../utils/consts";
import { isNil } from "lodash";

export const useFetchPokemon = (page: number) => {
    const { data, isLoading, error } = useQuery<PokemonList>({
        queryKey: ['pokemon', page],
        queryFn: async () => {
            const resp = await fetchPokemon({ limit: POKEMON_QTY, offset: page })
            if (!resp.ok) {
                throw new Error("failed to fetch pokemon API")
            }
            return await resp.json();
        },
        staleTime: ONE_MINUTE,
    });

    return {
        pokemon: data?.results || [],
        hasNext: !isNil(data?.next),
        isLoading,
        error,
    }
}