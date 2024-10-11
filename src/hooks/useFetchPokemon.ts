import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { Pagination } from "../types/shared";
import { fetchPokemon } from "../service/pokeapi.service";
import { DisplayPokemon } from "../types/pokemon";
import { ONE_MINUTE } from "../utils/consts";

export const useFetchPokemon = (pagination: Pagination): UseQueryResult<DisplayPokemon[] | undefined> => {
    return useQuery<DisplayPokemon[]>({
        queryKey: ['pokemon', pagination.limit, pagination.offset],
        queryFn: async () => {
            const resp = await fetchPokemon(pagination)
            if (!resp.ok) {
                throw new Error("failed to fetch pokemon API")
            }
            return (await resp.json())?.results;
        },
        staleTime: ONE_MINUTE,
    });
}