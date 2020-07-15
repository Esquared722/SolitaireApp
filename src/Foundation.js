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
        try {
            if (this.#suite === card.getSuite() &&
                ((this.deck.length === 0 && card.getValue() === 'A') ||
                    this.deck[this.deck.length - 1].compare(card) === -1)) {
                this.deck.push(card);
                return;
            }
        } catch (TypeError) {}
        throw null;
    }
}

class Foundation {
    #decks = new Map();

    constructor() {
        this.#decks.set('H', new FoundDeck('H'));
        this.#decks.set('S', new FoundDeck('S'));
        this.#decks.set('C', new FoundDeck('C'));
        this.#decks.set('D', new FoundDeck('D'));
    }

    transfer(card) {
        this.#decks.get(card.getSuite()).transfer(card);
    }

    toString() {
        const SUITES = ['H', 'S', 'C', 'D'];
        let fStr = '';

        SUITES.forEach(suite => {
            let fd = this.#decks.get(suite);
            fStr += `${fd.getSuite()}: ${fd.toString()} \n`;
        });

        return fStr;
    }
}

module.exports = Foundation;