/**
 * Represents a standard playing card
 */
class Card {
    #value = '';
    #suite = '';
    #revealed = null;
    #color = '';

    /**
     * 
     * @param {String} value - Value of playing card
     * @param {String} suite - Suite of playing card
     * @param {Boolean} [revealed=false] - (Default: false) Determines if the player can see the value and suite of card
     */
    constructor(value, suite, revealed=false) {
        this.#value = value
        this.#suite = suite
        this.#revealed = revealed
        this.#color = this.#suite === 'H' || this.#suite === 'D' ? 'red' : 'black'
    }

    /**
     * Gets value of card (1-Ace)
     */
    getValue() {
        return this.#value
    }

    /**
     * Gets suite of card (Hearts, Diamonds, Spades, or Clubs)
     */
    getSuite() {
        return this.#suite
    }

    /**
     * Gets the color of the card, red or black
     */
    getColor() {
        return this.#color  
    }

    /**
     * Checks if the card is face-up
     */
    isRevealed() {
        return this.#revealed
    }

    /**
     * Flips the card, negating its reveal state
     */
    flip() {
        this.#revealed = !this.#revealed
    }

    compare(otherCard, color=false) {
        const VALS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        return VALS.indexOf(this.#value) - VALS.indexOf(otherCard.getValue());
    }

    oppColor(otherCard) {
        return this.#color !== otherCard.getColor();
    }

    /**
     * Returns a string of the suite and color of the card if it is revealed
     */
    toString() {
        let suitesValues = new Map()
        suitesValues.set('2', 'Two')
        suitesValues.set('3', 'Three')
        suitesValues.set('4', 'Four')
        suitesValues.set('5', 'Five')
        suitesValues.set('6', 'Six')
        suitesValues.set('7', 'Seven')
        suitesValues.set('8', 'Eight')
        suitesValues.set('9', 'Nine')
        suitesValues.set('10', 'Ten')
        suitesValues.set('J', 'Jack')
        suitesValues.set('Q', 'Queen')
        suitesValues.set('K', 'King')
        suitesValues.set('A', 'Ace')
        suitesValues.set('H', 'Hearts')
        suitesValues.set('D', 'Diamonds')
        suitesValues.set('C', 'Clubs')
        suitesValues.set('S', 'Spades')

        return this.#revealed ? `${suitesValues.get(this.#value)} of ${suitesValues.get(this.#suite)}` : ''
    }
}

module.exports = Card