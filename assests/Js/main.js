const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}}&limit=${limit}`


function convertPokemonEmListaHtml(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                    alt="${pokemon.name}">
            </div>
        </li>
    `
}

const listaDepokemons = document.getElementById('pokemonsList')
fetch(url)//Requisição de promessa, para buscar os arquivos, ele sempre é um GET HTTP
    .then((response) => response.json())//transformando a promessa do Body em um arquivo Jason
    .then((jsonBody) => jsonBody.results)
    .then((listaPokemon) => {

        for (let i = 0; i < listaPokemon.length; i++) {
            const pokemon = listaPokemon[i];
            listaDepokemons.innerHTML += convertPokemonEmListaHtml(pokemon)

        }
    })//Recebendo os aquivos convertidos e mostrando na tela
    .catch((erro) => console.error(erro))

