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