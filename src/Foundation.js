const Deck = require("./Deck");
const Card = require("./Card");
const Tableau = require("./Tableau");

class FoundDeck extends Deck {
    #suite = '';

    constructor(suite) {
        super()
        this.#suite = suite
    }

    getSuite() {
        return this.#suite;
    }

    /**
     * 
     * @param {Card} card - card received from Talon or Tableau 
     */
    receive(card) {
        if (this.#suite === card.getSuite() &&
            ((this.deck.length === 0 && card.getValue() === 'A') ||
                this.deck.getTopCard().compare(card) === -1)) {
            this.deck.unshift(card);
            return;
        }
        throw null;
    }

    /**
     * Card being transferred to Tableau
     * @param {Number} deckIdx 
     * @param {Card} card 
     * @param {Tableau} Tableau 
     */
    give(deckIdx, card, Tableau) {
        this.deck.shift(card);
        Tableau.receiveCard(deckIdx, card);
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

    isFull() {
        return (
            (this.#decks.get('H').length +
                this.#decks.get('S').length +
                this.#decks.get('C').length +
                this.#decks.get('D').length) === 52
        );
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