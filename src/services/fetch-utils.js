export async function getPokemon(searchFilter) {
  const rawResponse = await fetch(`/.netlify/functions/pokemon?searchFilter=${searchFilter}`);
  const data = await rawResponse.json();

  return data;
}
