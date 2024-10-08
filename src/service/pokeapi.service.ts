// hardcoded but could be on .env
const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
// const API_URL = "https://pokeapi.co/api/v2/pokemon1?limit=100000&offset=0";

const fetchPokemon = async () => await fetch(API_URL);

export {
    fetchPokemon
};