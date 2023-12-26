
//lembrar sempre que todo novo arquivo precisa ser importado la no HTML
const pokeApi = {}
pokeApi.getDetalhesPokemons = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
}

pokeApi.getPokemons = (offset = 0, limit = 10) => {//Caso não seja repassado nehum valor, esses serão os valores usados por padrão

    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}}&limit=${limit}`

    return fetch(url)//Requisição de promessa, para buscar os arquivos, ele sempre é um GET HTTP

        .then((response) => response.json())//transformando a promessa do Body em um arquivo Jason
        .then((jsonBody) => jsonBody.results)//Pegando o detalhe dos resultados 
        .then((pokemons) => pokemons.map(pokeApi.getDetalhesPokemons))//Transformando essa lista vinda pelo o Arquivo jason
        // e transformando em uma nova Lista, que é a lista de promessas do detalhe que tem na lista de pokemons e no final convertendo pra Jason
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonDetails) => pokemonDetails)


}