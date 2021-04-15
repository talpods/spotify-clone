"use strict";

import Component, {setValue} from '../lib/Component';
import data from './CardCollection.json';

class CardCollection extends Component {
    constructor(title) {
        super(data);
        setValue(title, this.element.querySelector(".title"));

        this.cards = [];
        this.container = this.element.querySelector(".cards");
    }

    append(card) {
        card.element.dataset.index = this.cards.length;
        this.container.appendChild(card.element);
        this.cards.push(card);
    }
}


export default CardCollection;