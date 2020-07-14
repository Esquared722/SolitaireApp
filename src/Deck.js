var Card = require('./Card');

class Deck {
    constructor() {
        const VALS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const SUITES = ['H', 'D', 'S', 'C'];
        this.deck = new Array();

        SUITES.forEach(suite => {
            VALS.forEach(value => {
                this.deck.push(new Card(value, suite, true));
            });
        });

        // Fisher-Yates shuffle
        for (let i = 0; i < this.deck.length - 1; i++) {
            let j = Math.floor(Math.random() * (this.deck.length - i)) + i;
            let tmp = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = tmp;
        }
    }

    /**
     * Returns the deck
     */
    getDeck() {
        return deck
    }

    /**
     * 
     * @param {Number} n - quantity of cards to draw from the deck, defaults to 1
     */
    draw(n=1) {
        var draw = []

        for (let i = 0; i < n; i++) {
            draw.push(this.deck.pop())
        }

        return draw;
    }

    /**
     * 
     * @param {Card[]} cards - Array of Cards that will fill the deck
     */
    fill(cards) {
        cards.forEach(card => {
            this.deck.push(card)
        })
    }

    /**
     * Shuffles the deck using the modern version of the Fisher-Yates shuffle
     */
    shuffle() {
        for (let i = 0; i < this.deck.length - 2; i++) {
            let j = Math.floor(Math.random() * (this.deck.length - i)) + i;
            let tmp = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = tmp;
        }
    }

    /**
     * Stringifies the deck
     */
    toString() {
        let strDeck = '';
        let ctr = 0

        this.deck.forEach(card => {
            ctr != 51 ? strDeck += card.toString() + '\n' : strDeck += card.toString();
            ctr++;
        });

        return strDeck;
    }
}