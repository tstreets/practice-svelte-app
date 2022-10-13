export async function load({ fetch }) {
	return {
		msg: 'Hello',
		pokemonObj: fetch(`https://pokeapi.co/api/v2/pokemon/`).then((res) => res.json())
	};
}
