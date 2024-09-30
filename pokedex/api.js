const url = "https://pokeapi.co/api/v2/pokemon"

function carregarPokemon(){
    fetch(url)
.then((response) => response.json())
.then(data =>{
    const listaPokemons = data.results;

    listaPokemons.forEach(pokemon => {
        fetch(pokemon.url)
        .then(response =>response.json())
        .then(pokemonData =>{
           /* const pkmType = pokemonData.types.map(typeInfo =>{
                typeInfo.type.name.join(", ")
            })*/
            document
            .getElementById("pokedex")
            .innerHTML += `

<div class="pokemom">
<div class="cx1">
     <section class="cabeca">
     ${pokemonData.types.map(typeInfo => `
     <span class="${typeInfo.type.name}__type">${typeInfo.type.name}</span>
     `).join(" ")}
   
    <span class="veneno">poison</span>
</section>
<span class="id">#0001</span>
</div>
<div class="cx2">
    <section class="information">
    <h1>Bulbasaur</h1>
    <p>A strange seed was planted on its back at birth. the plant sprouts and grows with this pokémon.</p>
</section>
<img class="bulbasaur" src="imagens/1_1.png" alt="bubassauro">
</div>
</div>`
        })
    })
        
    });;
} 
carregarPokemon();

let main =document.getelementById(`pokedex`)