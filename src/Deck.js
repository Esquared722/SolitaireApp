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

        this.deck.forEach(card => {
            strDeck += `${card.toString()} `;
        });

        return strDeck;
    }
}

module.exports = Deck