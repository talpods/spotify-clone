"use strict";
import { getTracks, getCategories, search, getCategorySlug } from '../lib/data';

import Component, {setValue} from '../lib/Component';
import data from './CardCollection.json';
import Card from "./Card";

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

    return categories;
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

    return tracks;
};


export default CardCollection;

export {
    mountCategories,
    mountTracks
};