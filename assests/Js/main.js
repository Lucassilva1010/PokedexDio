

function convertpokemonTypesToLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => ` <li class="type">${typeSlot.type.name}</li>`)
}
function convertPokemonEmListaHtml(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#${pokemon.order}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${convertpokemonTypesToLi(pokemon.types).join('')}
                </ol>
                <img src="${pokemon.sprites.other.dream_world.front_default}"
                    alt="${pokemon.name}">
            </div>
        </li>
    `
}

const listaDepokemons = document.getElementById('pokemonsList')

pokeApi.getPokemons().then((Pokemons = []) => {
    //pegando o valor do Html Antigo, e passando para o MAP tranformar em uam Lista de HTML, e depois juntando sem separadores
    listaDepokemons.innerHTML += Pokemons.map(convertPokemonEmListaHtml).join(' ')
})



//Codigo antigo
// pokeApi.getPokemons().then((listaPokemon = []) => {

//     const newList = listaPokemon.map((pokemon) => {
//         return convertPokemonEmListaHtml(pokemon)
//     })

//     const newListHtml = newList.join('')//Aqui está sendo usado o Join para colocar um separador vazio entre os arquivos, póis por padrão ele sempre vem com uma virgula
//     listaDepokemons.innerHTML += newListHtml//Transformando a nova lista em HTML, essa está vindo la no BODY na linha 24

//Todo esse codigo a baixo foi substituido pelo MAP
// const listaItensPokemon = []
// for (let i = 0; i < listaPokemon.length; i++) {
//     const pokemon = listaPokemon[i];
//     listaItensPokemon.push(convertPokemonEmListaHtml(pokemon))
//     // }
//     // console.log(listaItensPokemon);
// })//Recebendo os aquivos convertidos e mostrando na tela

