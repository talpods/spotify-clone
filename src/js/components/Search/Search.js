"use strict";

import Component from '../../lib/Component';


import { getCategories, getTracks, getCategorySlug } from '../../lib/data';
import playTrack from '../../lib/playTrack';

import CardCollection from '../CardCollection';

import {buttonTypes} from "../Card/buttonFactory";

const buttons = [buttonTypes.play];

import data from './Search.json';

class Search extends Component {
    constructor(player, toolbar, json = data) {
        super(json);

        this.player = player;
        this.toolbar = toolbar;
        this.toolbar.subscribeSearch(this.update.bind(this));

        this.search = new CardCollection("Search");
        this.search.addListener("click", this.playCard, this);
        this.append(this.search);

        this.getInitialData();
    }

    async getInitialData() {
        const all = await this.toolbar.fillAll();
        this.update(all);
    }

    update(searchResult) {

        this.search.fillCollection(searchResult, item => {
            return {
                title: item.title,
                text: item.author,
                image: item.image,
                duration: item.duration,
                url: item.url,
                slug: item.category.slug,
                buttons
            };
        });
    }

    playCard({card}) {
        if (!card) {
            return;
        }

        // if (card.action !== "play") {
        //     return;
        // }

        // console.log("play");

        // get props for the card
        const { props } = card;

        const track = playTrack(props.title, props.text,
            props.image, props.url);

        this.player.play([track]);
    }
}


const mountSearch = (container, player, toolbar) => {
    const component = new Search(player, toolbar);
    component.mount(container);
    return component;
};
export default Search;
export {
    mountSearch
};
