"use strict";

import Component from '../../lib/Component';

import data from './Home.json';
import { getCategories, getTracks, getCategorySlug } from '../../lib/data';
import playTrack from '../../lib/playTrack';

import CardCollection from '../CardCollection';
import {buttonTypes} from "../Card/buttonFactory";

const buttons = [buttonTypes.play];

class Home extends Component {
    constructor(player) {
        super(data);

        this.player = player;

        this.categories = new CardCollection("Categories");
        this.categories.addListener("click", this.playCategory, this);
        this.append(this.categories);

        this.tracks = new CardCollection("Tracks");
        this.tracks.addListener("click", this.playTrack, this);
        this.append(this.tracks);

        this.fetchData();


    }


    /**
     * method for fetching data
     */
    async fetchData() {
        const categoryData = await getCategories();

        this.categories.fillCollection(categoryData, item => {
            return {
                title: item.title,
                text: item.slug,
                image: item.image,
                slug: item.slug,
                buttons
            };
        });

        const tracksData = await getTracks();
        this.tracks.fillCollection(tracksData, item => {
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

    async playCategory({ props }) {
        if (!props) {
            return;
        }

        const result = await getCategorySlug(props.text);

        const tracks = result.tracks.map(crt => playTrack(crt.title, crt.author, crt.image, crt.url));

        this.player.play(tracks);
    }

    playTrack({ props }) {
        if (!props) {
            return;
        }

        const track = playTrack(props.title, props.text,
            props.image, props.url);

        this.player.play([track]);
    }

}

const mountHome = (container, player) => {
    const component = new Home(player);
    component.mount(container);
    return component;
};

export default Home;
export {
    mountHome
};

