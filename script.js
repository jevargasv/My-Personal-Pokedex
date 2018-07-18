//Pokemon API
let img = document.getElementsByTagName('img');
let upArrow = document.getElementById('upArrow');
let downArrow = document.getElementById('downArrow');
let leftArrow = document.getElementById('leftArrow');
let rightArrow = document.getElementById('rightArrow');
let homeCircle = document.getElementById('homeCircle'); 
let id = document.getElementById('id');
let name = document.getElementById('name');
let hp = document.getElementById('hp');
let attack = document.getElementById('attack');
let defense = document.getElementById('defense');
let abilityOne = document.getElementById('one');
let abilityTwo = document.getElementById('two');
let abilityThree = document.getElementById('three');
let abilityFour = document.getElementById('four');

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
    
let MadameZapphir = new Trainer('Madame Zapphir');
    
//Pokemon #1: Dewgong
axios.get("https://pokeapi.co/api/v2/pokemon/87").then((response) => {
    let data = response.data;

    let dewgong = new Pokemon(
        response.data.id,
        response.data.name,
        response.data.stats[5].base_stat,
        response.data.stats[4].base_stat,
        response.data.stats[3].base_stat,
        response.data.abilities[0].ability.name,
        response.data.abilities[1].ability.name,
        response.data.abilities[2].ability.name,
        response.data.moves[2].move.name,
    )
    // MadameZapphir.pokemon.push(data);
    MadameZapphir.add(dewgong);
    console.log(dewgong);
});

//Pokemon #2: Starmie
axios.get("https://pokeapi.co/api/v2/pokemon/121/").then((response) => {
    let data = response.data;
    console.log(data);

    let starmie = new Pokemon(
        response.data.id,
        response.data.name,
        response.data.stats[5].base_stat,
        response.data.stats[4].base_stat,
        response.data.stats[3].base_stat,
        response.data.abilities[0].ability.name,
        response.data.abilities[1].ability.name,
        response.data.abilities[2].ability.name,
        response.data.moves[3].move.name,
    )
        // MadameZapphir.pokemon.push(data);
        MadameZapphir.add(starmie);
        console.log(starmie);
});

//Pokemon #3: Marill
axios.get("https://pokeapi.co/api/v2/pokemon/183/").then((response) => {
    let data = response.data;

    let marill = new Pokemon(
        response.data.id,
        response.data.name,
        response.data.stats[5].base_stat,
        response.data.stats[4].base_stat,
        response.data.stats[3].base_stat,
        response.data.abilities[0].ability.name,
        response.data.abilities[1].ability.name,
        response.data.abilities[2].ability.name,
        response.data.moves[4].move.name,
    )
        // MadameZapphir.pokemon.push(data);
        MadameZapphir.add(marill);
        console.log(marill);
        console.log(MadameZapphir.pokemon)
});
//Selecting Pokemon
    let i = 0;

    rightArrow.addEventListener('click', () => {
        console.log(i);
        id.innerText = '#' + MadameZapphir.pokemon[i].id;
        name.innerText = MadameZapphir.pokemon[i].name.capitalize;
        hp.innerText = 'HP: ' + MadameZapphir.pokemon[i].hp;
        attack.innerText = 'Attack: ' + MadameZapphir.pokemon[i].attack;
        defense.innerText = 'Defense: ' + MadameZapphir.pokemon[i].defense;
        abilityOne.innerText = MadameZapphir.pokemon[i].abilityOne;
        abilityTwo.innerText = MadameZapphir.pokemon[i].abilityTwo;
        abilityThree.innerText = MadameZapphir.pokemon[i].abilityThree;
        abilityFour.innerText = MadameZapphir.pokemon[i].abilityFour;
        img.src = MadameZapphir.pokemon[i].image;
        i++;
    })
    leftArrow.addEventListener('click', () => {
        console.log(i);
        id.innerText = '#' + MadameZapphir.pokemon[i].id;
        name.innerText = MadameZapphir.pokemon[i].name.capitalize;
        hp.innerText = 'HP: ' + MadameZapphir.pokemon[i].hp;
        attack.innerText = 'Attack: ' + MadameZapphir.pokemon[i].attack;
        defense.innerText = 'Defense: ' + MadameZapphir.pokemon[i].defense;
        abilityOne.innerText = MadameZapphir.pokemon[i].abilityOne;
        abilityTwo.innerText = MadameZapphir.pokemon[i].abilityTwo;
        abilityThree.innerText = MadameZapphir.pokemon[i].abilityThree;
        abilityFour.innerText = MadameZapphir.pokemon[i].abilityFour;
        img.src = MadameZapphir.pokemon[i].image;
        i--;
    })
    
    
    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    
    // id.innerHTML = '#' + data.id;
    // name.innerHTML = data.name.capitalize;
    // hp.innerHTML = 'HP: ' + data.stats[i].base_stat;
    // attack.innerHTML = 'Attack' + data.stats[i].base_stat,
    // defense.innerHTML = 'Defense' + data.stats[i].base_stat,
    // abilityOne.innerHTML = data.abilities[i].ability.name,
    // abilityTwo.innerHTML = data.abilities[i].ability.name,
    // abilityThree.innerHTML = data.abilities[i].ability.name,
    // abilityFour.innerHTML = data.moves[i].move.name,