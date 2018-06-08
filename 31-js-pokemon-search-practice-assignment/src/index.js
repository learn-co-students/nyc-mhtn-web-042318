document.addEventListener("DOMContentLoaded", function() {
    const pokemonObjs = data.pokemons
    const searchInputField = document.getElementById('pokemon-search-input')
    const pokemonFrame = document.getElementById('pokemon-container')

    pokemonFrame.addEventListener('click',function(event) {
        if (event.target.dataset.action=="flip-image") {
            flipImage(event.target.dataset.pokename)
        }
    })

    function flipImage(name) {
        const imgTag = document.getElementById(`pokemon-image-${name}`)
        const imageDirection = imgTag.dataset.currentSprite == 'front' ? 'back' : 'front'
        const imgSprite = pokemonObjs.find( p=>p.name == name ).sprites[imageDirection]
        imgTag.src = imgSprite
        imgTag.dataset.currentSprite = imageDirection
    }

    function generatePokemon(poke) {
        return `<div class="pokemon-container">
        <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
            <h1 class="center-text">${poke.name}</h1>
            <div style="width:239px;margin:auto">
            <div style="width:96px;margin:auto">
                <img data-current-sprite='front'  id='pokemon-image-${poke.name}' src="${poke.sprites.front}">
            </div>
            </div>
                <p style="padding:10px;" class="center-text flip-image" data-pokename="${poke.name}" data-action="flip-image">flip card</p>
            </div>
        </div>
        `
    }


    searchInputField.addEventListener('keyup',function(event) {
        pokemonFrame.innerHTML = ''
        const searchTerm = searchInputField.value
        if (searchTerm) {
            const searchResults = pokemonObjs.filter( p=>p.name.includes(searchTerm) )
            searchResults.forEach( pokemonObj => pokemonFrame.innerHTML += generatePokemon(pokemonObj) )
            console.log(searchResults)
        }

    })
    console.log(searchInputField)

})
