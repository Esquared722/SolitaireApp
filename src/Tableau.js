const Deck = require('./Deck');
const Card = require('./Card');

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

        if (tabLen === 13 || (deck.length + tabLen) > 13) {
            throw null;
        }

        if ((topOther.getValue() === 'K' && tabLen === 0) ||
            (topTabCard.oppColor(topOther) && topTabCard.compare(topOther) === -1)) {

            deck.forEach(card => {
                this.deck.push(card);
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

    transfer(deckNo, deck) {
        this.#table[deckNo].transfer(deck);
    }
}