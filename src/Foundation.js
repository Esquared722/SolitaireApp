const Deck = require("./Deck");
const Card = require("./Card");

class FoundDeck extends Deck {
    #suite = '';

    constructor(suite) {
        super()
        this.#suite = suite
    }

    getSuite() {
        return this.#suite;
    }

    transfer(card) {
        if(this.#suite == card.getSuite() && 
        ((this.deck.length === 0 && card.getValue() === 'A') 
        || this.deck[this.deck.length - 1].compare(card) === -1)) {
            this.deck.push(card);
            return 1;
        } else {
            return null;
        }
    }
}

class Foundation {
    // TODO
    constructor() {}
}
