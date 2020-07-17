const Deck = require('./Deck');
const Card = require('./Card');
const Stock = require('./Stock');

class TabDeck extends Deck {
    constructor() {
        super();
    }

    /**
     * Transfers a deck of cards in the tableau deck.
     * - Checks receiving top card is of opposite color and is one lower in value
     *   than the top card of this deck
     * - throws `null` if the transfer is invalid
     * @param {Deck} deck - deck of n cards 
     */
    transfer(deck) {
        let tabLen = this.deck.length;
        let topTabCard = this.deck.getTopCard();
        let topOther = deck.getTopCard();

        if (tabLen === 13 || (deck.length + tabLen) > 13) throw null;

        if ((topOther.getValue() === 'K' && tabLen === 0) ||
            (topTabCard.oppColor(topOther) && topTabCard.compare(topOther) === -1)) {

            deck.forEach(card => {
                this.deck.unshift(card);
                deck.shift(card);
            });
            return;
        }

        throw null;
    }
}

class Tableau {
    #table = [];
    constructor() {
        this.#table = [
            new TabDeck(), new TabDeck(), new TabDeck(), new TabDeck(),
            new TabDeck(), new TabDeck(), new TabDeck()
        ];
    }

    /**
     * **Initializes the tableau at game start**
     * - Recursively fills all 7 tableau decks
     * - Follows the [Bicycle Rule Set](https://bicyclecards.com/how-to-play/solitaire/)
     * for dealing procedure
     * @param {Stock} stock - starting, shuffled Hand 
     * @param {Number} deckIdx - index of deck that is given the revealed card.
     */
    init(stock, deckIdx) {
        this.#table[deckIdx].unshift(stock.shift().flip());

        if (deckIdx === 6) return; // Base Case

        // Recursive Step
        for (let i = deckIdx + 1; i < this.#table.length; i++) {
            this.#table[i].unshift(stock.shift());
        }

        this.init(stock, deckIdx + 1);
    }

    /**
     * 
     * @param {Number} deckIdx
     * @param {Deck} deck 
     */
    transfer(deckIdx, deck) {
        this.#table[deckIdx].transfer(deck);
    }

    /**
     * Card received from either the Tableau, Foundation, or Talon
     * @param {Number} deckIdx 
     * @param {Card} card 
     */
    receiveCard(deckIdx, card) {
        this.#table[deckIdx].transfer(new Deck([card]));
    }
}

module.exports = Tableau;