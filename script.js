//Pokemon API

$(document).ready(function() {

    axios.get(`https://pokeapi.co/api/v2/pokemon-form/${id}/`).then((response) => {
        let data = response.data;
        let image = document.querySelector('img');
        let id = document.querySelector('id');
        let name = document.querySelector('name');
        let hp = document.querySelector('hp');
        let attack = document.querySelector('attack');
        let defense = document.querySelector('defense');
        let abilityOne = document.querySelector('one');
        let abilityTwo = document.querySelector('two');
        let abilityThree = document.querySelector('three');
        let abilityFour = document.querySelector('four');
        }).catch(function(error));

});
//Left and Right Arrow functions for Pokemon Browsing

$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        break;

        case 39: // right
        break;

        default: return;
    }
    e.preventDefault();

    let leftArrow = document.querySelector('leftArrow');
    let rightArrow = document.querySelector('rightArrow');

});

//Up and Down Arrow functions for Pokemon Statistics Scrolling

$(document).keyup(function(e) {
    switch(e.which) {
        case 38: // up
        break;

        case 40: // down
        break;

        default: return;
    }

    let upArrow = document.querySelector('upArrow');
    let downArrow = document.querySelector('downArrow');
}),