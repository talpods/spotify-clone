"use strict";

import Component from '../../lib/Component';


import { getCategories, getTracks, getCategorySlug } from '../../lib/data';
import playTrack from '../../lib/playTrack';

import CardCollection from '../CardCollection';


class Search extends Component {
    constructor(player, toolbar) {
        super({});

        this.player = player;
        this.toolbar = toolbar;
        this.toolbar.subscribeSearch(this.update.bind(this));

        this.search = new CardCollection("Search");
        this.search.addListener("click", this.playCard, this);

        // this.categories = new CardCollection("Categories");
        // this.categories.addListener("click", this.playCategory, this);
        // this.append(this.categories);

        // this.tracks = new CardCollection("Tracks");
        // this.tracks.addListener("click", this.playTrack, this);
        // this.append(this.tracks);

        // this.fetchData();


    }

    update(searchResult) {
        console.log("update");

        this.search.fillCollection(searchResult, item => {
            return {
                title: item.title,
                text: item.author,
                image: item.image,
                duration: item.duration,
                url: item.url,
                slug: item.category.slug,
            };
        });
    }

    playCard() {
        console.log("play card");
    }
    /**
     * method for fetching data
     */
    async fetchData() {
        const tracksData = await getTracks();
        this.tracks.fillCollection(tracksData, item => {
            return {
                title: item.title,
                text: item.author,
                image: item.image,
                duration: item.duration,
                url: item.url,
                slug: item.category.slug,
            };
        });
    }


    // playTrack({ card }) {
    //     if (!card) {
    //         return;
    //     }

    //     // get props for the card
    //     const { props } = card;

    //     const track = playTrack(props.title, props.text,
    //         props.image, props.url);

    //     this.player.play([track]);
    // }

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
