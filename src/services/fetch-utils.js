export async function getPokemon(name) {
  const rawResponse = await fetch(`/.netlify/functions/pokemon?name=char`);
  const data = await rawResponse.json();

  return data;
}
