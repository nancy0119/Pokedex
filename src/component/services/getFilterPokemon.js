const baseUrl = "https://pokeapi.co/api/v2";
const query = {
    type: 'type'
}
export async function fetchPokemon(type){
    console.log(`${baseUrl}/${query.type}/${type}`);
    return fetch(`${baseUrl}/${query.type}/${type}`);
}