
//lembrar sempre que todo novo arquivo precisa ser importado la no HTML
const pokeApi = {}

function convertpokeApiDetalhesDoPokemon(pokeDetalhe) {
    const pokemon = new Pokemon()
    pokemon.numero = pokeDetalhe.id
    pokemon.nome = pokeDetalhe.name

    const tipos = pokeDetalhe.types.map((typesSlot) => typesSlot.type.name)//busca totos os tipos contidos em cada Pokemon
    const [tipo] = tipos //usando o destruct par apegar a primeira posição

    pokemon.tipos = tipos
    pokemon.tipoPrincipal = tipo//Lista o Principal tipo de tiver

    pokemon.imagem = pokeDetalhe.sprites.other.dream_world.front_default

    return pokemon// retorna com o novo Pokemon
}



pokeApi.getDetalhesPokemons = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertpokeApiDetalhesDoPokemon)
}

pokeApi.getPokemons = (offset, limit) => {//Caso não seja repassado nehum valor, esses serão os valores usados por padrão

    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}}&limit=${limit}`

    return fetch(url)//Requisição de promessa, para buscar os arquivos, ele sempre é um GET HTTP

        .then((response) => response.json())//transformando a promessa do Body em um arquivo Jason
        .then((jsonBody) => jsonBody.results)//Pegando o detalhe dos resultados 
        .then((pokemons) => pokemons.map(pokeApi.getDetalhesPokemons))//Transformando essa lista vinda pelo o Arquivo jason
        // e transformando em uma nova Lista, que é a lista de promessas do detalhe que tem na lista de pokemons e no final convertendo pra Jason
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonDetails) => pokemonDetails)


}