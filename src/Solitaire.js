const Stock = require('./Stock');
const Foundation = require('./Foundation');
const Tableau = require('./Tableau');
const Deck = require('./Deck')


class Solitaire {
    #stock = [];
    #talon = null;
    #foundation = null;
    #tableau = null;

    constructor() {
        this.#stock = new Stock();
        this.#talon = new Deck();
        this.#foundation = new Foundation();
        this.#tableau = new Tableau();
        this.#tableau.init(this.#stock);
    }

    isWin() {
        return this.#foundation.isFull();
    }

    reset() {
        this.#stock = new Stock();
        this.#talon = new Deck();
        this.#foundation = new Foundation();
        this.#tableau = new Tableau();
    }

    getStock() {
        return this.#stock;
    }

    getTalon() {
        return this.#talon;
    }

    getFound() {
        return this.#foundation;
    }

    getTab() {
        return this.#tableau;
    }


}

module.exports = Solitaire