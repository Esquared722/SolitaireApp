class Deck {
    constructor() {
        this.deck = [];
    }

    /**
     * Returns the deck
     */
    getDeck() {
        return deck
    }

    /**
     * 
     * @param {Deck} otherDeck - Transfer deck
     * @param {Number} n - Amt. of cards to transfer
     */
    transfer(otherDeck, n=1) {
        for(let i = 0; i < n; i++) {
            otherDeck.push(this.deck.pop());
        }
    }

    /**
     * Stringifies the deck
     */
    toString() {
        let strDeck = '';
        let ctr = 0

        this.deck.forEach(card => {
            ctr != this.deck.length - 1 ? strDeck += `${card.toString()}\n` : strDeck += card.toString();
            ctr++;
        });

        return strDeck;
    }
}

module.exports = Deck