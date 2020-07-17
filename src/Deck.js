class Deck {
    constructor(cards=[]) {
        this.deck = cards;
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

    getTopCard() {
        return this.deck[this.deck.length - 1];
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