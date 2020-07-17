const Deck = require('./Deck')
const Card = require('./Card');

class Stock extends Deck{
    constructor() {
        super()
        const VALS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const SUITES = ['H', 'D', 'S', 'C'];

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

    transfer(talon) {
        let handCard = this.deck.pop();
        handCard.flip();
        talon.push(handCard);
    }
}

module.exports = Stock;
