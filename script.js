//Pokemon API

$(document).ready(function() {

    class Pokemon {
        constructor(image, id, name, hp, attack, defense, abilities) {
            this.image = image;
            this.id = id;
            this.name = name;
            this.hp = hp;
            this.attack = attack;
            this.defense = defense;
            this.abilities = abilities;
        }
    }
    
    class Trainer {
        constructor() {
            this.pokemon = [];
        }
            get(name) {
                for (let i = 0; i < this.pokemon.length; i++) {
                    if (this.pokemon[i].name === name) {
                    }    return this.pokemon[i];
                }
            }
        
            add(pokemonObject) {
                this.pokemon.push(pokemonObject);
            }
    
            all() {
                return this.pokemon;
            }
        
    }        
    
    letMadameZapphir = new Trainer('Madame Zapphir');
    
//Pokemon #1: Dewgong
    axios.get("https://pokeapi.co/api/v2/pokemon-form/87").then((response) => {
        let data = response.data;

        let dewgong = new Pokemon(
            data.id,
            data.name,
            data.stats[5].base_stat,
            data.stats[4].base_stat,
            data.stats[3].base_stat,
            data.abilities[0].ability.name,
            data.abilities[1].ability.name,
            data.abilities[2].ability.name,
            data.moves[2].move.name,
        )
        MadameZapphir.add(dewgong);
    });

    //Pokemon #2: Starmie
    axios.get("https://pokeapi.co/api/v2/pokemon-form/121/").then((response) => {
        let data = response.data;

        let starmie = new Pokemon(
            data.id,
            data.name,
            data.stats[5].base_stat,
            data.stats[4].base_stat,
            data.stats[3].base_stat,
            data.abilities[0].ability.name,
            data.abilities[1].ability.name,
            data.abilities[2].ability.name,
            data.moves[3].move.name,
        )
        MadameZapphir.add(starmie);
    });

    //Pokemon #3: Marill
    axios.get("https://pokeapi.co/api/v2/pokemon-form/183/").then((response) => {
        let data = response.data;

        let marill = new Pokemon(
            data.id,
            data.name,
            data.stats[5].base_stat,
            data.stats[4].base_stat,
            data.stats[3].base_stat,
            data.abilities[0].ability.name,
            data.abilities[1].ability.name,
            data.abilities[2].ability.name,
            data.moves[4].move.name,
        )
        MadameZapphir.add(marill);
    });

        let pokemon = document.querySelector('.pokemon');
        let id = document.querySelector('#id');
        let name = document.querySelector('#name');
        let hp = document.querySelector('#hp');
        let attack = document.querySelector('#attack');
        let defense = document.querySelector('#defense');
        let abilityOne = document.querySelector('#one');
        let abilityTwo = document.querySelector('#two');
        let abilityThree = document.querySelector('#three');
        let abilityFour = document.querySelector('#four');
        let upArrow = document.querySelector('#upArrow');
        let downArrow = document.querySelector('#downArrow');
        let leftArrow = document.querySelector('#leftArrow');
        let rightArrow = document.querySelector('#rightArrow');
        let homeCircle = document.querySelector('#homeCircle');

        id.html ("#" + data.id);
        name.html (data.name);
        hp.html ("HP: " + data.stats[i].base_stat),
        attack.html ("Attack" + data.stats[i].base_stat),
        defense.html ("Defense" + data.stats[i].base_stat),
        abilityOne.html (data.abilities[i].ability.name),
        abilityTwo.html (data.abilities[i].ability.name),
        abilityThree.html (data.abilities[i].ability.name),
        abilityFour.html (data.moves[i].move.name),

        $(document).ready(function() {
    get_random_pokemon('.pokemon'); {
        var a = (parseInt(Math.random() * 3)) + 1; 
        $(".pokemon #img.block").removeClass("block").addClass("none");
        $(".pokemon:eq(" + a + ")img").removeClass("none").addClass("block");
    }
    setInterval(function() {
        get_random_pokemon();
    }, 500);
});






    }).catch((error) => {
        console.log(ERROR)
});

//Left and Right Arrow functions for Pokemon Browsing

//$(document).keydown(function(e) {
    //switch(e.which) {
        //case 37: // left
        //break;

        //case 39: // right
        //break;

        //default: return;
    //}
    //e.preventDefault();

    //let leftArrow = document.querySelector('leftArrow');
    //let rightArrow = document.querySelector('rightArrow');

//});

//Up and Down Arrow functions for Pokemon Statistics Scrolling

//$(document).keyup(function(e) {
    //switch(e.which) {
        //case 38: // up
        //break;

        //case 40: // down
        //break;

        //default: return;
    //}

    //let upArrow = document.querySelector('upArrow');
    //let downArrow = document.querySelector('downArrow');
//}),


//$(document).ready(function() {
    //get_random_pokemon(); {
        //var a = (parseInt(Math.random() * 3)) + 1; 
        //$(".pokemon #img.block").removeClass("block").addClass("none");
        //$(".pokemon:eq(" + a + ")img").removeClass("none").addClass("block");
    //}
    //setInterval(function() {
        //get_random_pokemon();
    //}, 500);
//});
