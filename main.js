class Pokemon {
    constructor(id, name, hp, attack, defense) {
        this.id = id;
        this.name = name;
        this.hp = parseInt(hp);
        this.attack = parseInt(attack);
        this.defense = parseInt(defense);
        this.abilities = [''];
    }
}

class Trainer {
    constructor() {
        this.pokemon = [];
    
    get(name);
        for (let i = 0; i < this.pokemon.length; i++) {
            if (this.pokemon[i].name === name) {
                return this.pokemon[i];
            }
        }

    add(pokemonObject);
        this.pokemon.push(pokemonObject);

    all();
        return this.pokemon;
    }
}        

letMadameZapphir = new Trainer();