document.addEventListener('DOMContentLoaded', () => {
  let allPokemonData = []
  const pokemonContainer = document.querySelector('#pokemon-container')
  const pokemonSearchInput = document.querySelector('#pokemon-search-form')

  // fetch('http://localhost:3000/pokemon'/*, { method: 'GET' }*/)
  //   .then((responseObject) => responseObject.json())
  //   .then((pokeJSONData) => {
  //     allPokemonData = pokeJSONData
  //     pokemonContainer.innerHTML = renderAllPokemon(allPokemonData)
  //   })

  //   pokemonSearchInput.addEventListener('input', (event) => handleSearchInput(event, allPokemonData, pokemonContainer))

  //   pokemonContainer.addEventListener('click', (event) => handleImgClick(event, allPokemonData))

  fetch("http://localhost:3000/pokemon")
    .then(resp => resp.json())
    .then(pokeData => {
      const allPoke = pokeData.map(pokemon => renderSinglePokemon(pokemon)).join("")
      pokemonContainer.innerHTML += allPoke
    })


  // const pokemon = renderSinglePokemon(onePokemon)
  pokemonContainer.addEventListener("click", function(e){
    if (e.target.className === "pokemon-button"){
      const pokemonTBD = e.target.parentElement.parentElement
      const pokeId = pokemonTBD.id.split("pokemon")[1]
      fetch(`http://localhost:3000/pokemon/${pokeId}`,{
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
      }
      }).then(() => pokemonTBD.remove())

      // pokemonTBD.remove()
    }
  })

})
