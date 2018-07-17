//Pokemon #1 - Dewgong

axios.get("https://pokeapi.co/api/v2/pokemon-form/87").then((response) => {
    let data = response.data
    let image = document.getElementsByClassName('pokemon');
    let id = document.getElementById('id');
    let name = document.getElementById('name');
    let hp = document.getElementById('hp');
    let attack = document.getElementById('attack');
    let defense = document.getElementById('defense');
    let abilities = document.getElementById('abilities');

    let dewgong = new Pokemon()
})

//Pokemon #2 - Starmie

axios.get("https://pokeapi.co/api/v2/pokemon-form/121").then((response) => {
    let data = response.data
    let image = document.getElementsByClassName('pokemon');
    let id = document.getElementById('id');
    let name = document.getElementById('name');
    let hp = document.getElementById('hp');
    let attack = document.getElementById('attack');
    let defense = document.getElementById('defense');
    let abilities = document.getElementById('abilities');

    let starmie = new Pokemon()
})

//Pokemon #3 - Marill

axios.get("https://pokeapi.co/api/v2/pokemon-form/183").then((response) => {
    let data = response.data
    let image = document.getElementsByClassName('pokemon');
    let id = document.getElementById('id');
    let name = document.getElementById('name');
    let hp = document.getElementById('hp');
    let attack = document.getElementById('attack');
    let defense = document.getElementById('defense');
    let abilities = document.getElementById('abilities');

    let marill = new Pokemon()

    console.log(pokemon)