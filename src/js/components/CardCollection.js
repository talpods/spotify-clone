"use strict";
import { getTracks, getCategories, search, getCategorySlug } from '../lib/data';

import Component, {setValue} from '../lib/Component';
import data from './CardCollection.json';
import Card from './Card/Card';


const defaultFactory = (item, cb) => new Card(cb(item));

class CardCollection extends Component {
    constructor(title) {
        super(data);
        setValue(title, this.element.querySelector(".title"));
        this.title = title;

        this.cards = [];
        this.container = this.element.querySelector(".cards");
    }

    /**
     * fillCollection() - method for filling entire colection of items.
     * @param {array} data - data array received from server or created locally
     * @param {function} propsCB - callback function for filling props
     */
    fillCollection(data, propsCB, cardFactory = defaultFactory) {
        // reset old content
        this.resetCollection();

        // create fragment for optimizing fill
        const fragment = document.createDocumentFragment();

        for (let item of data) {
            // create card for current item using props callback
            let card = cardFactory(item, propsCB);
            card.element.dataset.index = this.cards.length;

            // add the card to collection
            this.cards.push(card);

            // append element to the document fragment
            fragment.appendChild(card.element);
        }

        // append fragment to the collection element
        this.container.append(fragment);
    }

    /**
     *
     * @param {Card} card - card component to be added to collection
     */
    append(card) {
        card.element.dataset.index = this.cards.length;
        this.container.appendChild(card.element);
        this.cards.push(card);
    }

    /**
     * resetCollection() - erase entire collection.
     * @returns DocumentFragment for filling new items
     */
    resetCollection() {
        // remove listeners
        this.cards.forEach(item => item.removeEvents());

        // reset cards
        this.cards = [];

        // reset the html child elements
        this.container.innerHTML = "";
    }
}


const mountCategories = async (container) => {
    const categories = await getCategories();
    const cards = new CardCollection("Categories");

    for (let category of categories) {

        const props = {
            title: category.title,
            text: category.slug,
            image: category.image
        };

        cards.append(new Card(props));
    }

    cards.mount(container);

    return cards;
};

const mountTracks = async (container) => {
    const tracks = await getTracks();
    const cards = new CardCollection("Trakcs");

    for (let track of tracks) {
        const props = {
            title: track.title,
            text: track.author,
            image: track.image
        }

        cards.append(new Card(props));
    }

    cards.mount(container);

    return cards;
};


export default CardCollection;

export {
    mountCategories,
    mountTracks
};