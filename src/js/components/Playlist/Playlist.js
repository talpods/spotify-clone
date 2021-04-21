import Component from '../../lib/Component';

import data from './Playlist.json';
import { getCategories, getTracks, getCategorySlug } from '../../lib/data';
import playTrack from '../../lib/playTrack';

import CardCollection from '../CardCollection';
import Search from '../Search/Search';

import CardAdd from '../Card/CardAdd';


class Playlist extends Search {
    constructor(player, toolbar) {
        super(player, toolbar, data);

        this.playlist = new CardCollection("Playlist");
        this.append(this.playlist);
        this.search.addListener("click", this.playCard, this);
    }

    getFactory() {
        return (item, cb) => new CardAdd(cb(item));
    }

    playCard({card}) {
        if (!card) {
            return;
        }

        if (card.action !== "play") {
            return;
        }

        console.log("play");

        // get props for the card
        const { props } = card;

        const track = playTrack(props.title, props.text,
            props.image, props.url);

        this.player.play([track]);
    }
}

const mountPlaylist = (container, player, toolbar) => {
    const component = new Playlist(player, toolbar);
    component.mount(container);
    return component;
};

export default Playlist;

export {
    mountPlaylist
};