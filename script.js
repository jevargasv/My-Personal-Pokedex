axios.get(`https://pokeapi.co/api/v2/pokemon-form/${id}`).then((response) => {
    let data = response.data
    let image = document.getElementsByClassName('pokemon');
    let id = document.getElementById('id');
    let name = document.getElementById('name');
    let hp = document.getElementById('hp');
    let attack = document.getElementById('attack');
    let defense = document.getElementById('defense');
    let abilities = document.getElementById('abilities');

    let dewgong = new Pokemon()
    let starmie = new Pokemon()
    let marill = new Pokemon()

    console.log()
})

