import { Pagination } from "../types/shared";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

const fetchPokemon = async ({ limit, offset } : Pagination) => 
    await fetch(`${API_URL}?limit=${limit}&offset=${offset}`);

const fetchSinglePokemon = async (name: string) => 
    await fetch(`${API_URL}/${name}`);

export {
    fetchPokemon,
    fetchSinglePokemon,
};
