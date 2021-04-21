"use strict";

import Component from '../../lib/Component';
import data from './Playlist.json';
import playTrack from '../../lib/playTrack';
import CardCollection from '../CardCollection';
import {buttonTypes} from "../Card/buttonFactory";

const searchButtons = [buttonTypes.play, buttonTypes.add];

const listButtons = [buttonTypes.play, buttonTypes.delete];

const itemCB =  (item, buttons = searchButtons) => {
    return {
        title: item.title,
        text: item.author,
        image: item.image,
        duration: item.duration,
        url: item.url,
        slug: item.category.slug,
        buttons
    };
};


class Playlist extends Component {
    constructor(player, toolbar) {
        super(data);

        this.player = player;
        this.toolbar = toolbar;
        this.toolbar.subscribeSearch(this.update.bind(this));

        this.search = new CardCollection("Search");
        this.search.addListener("click", this.searchAction, this);
        this.append(this.search);

        this.list = new CardCollection("List");
        this.list.addListener("click", this.listAction, this);
        this.append(this.list);


        this.getInitialData();
    }

    async getInitialData() {
        const all = await this.toolbar.fillAll();
        this.update(all);
    }

    update(searchResult) {
        this.search.fillCollection(searchResult, itemCB);
    }

    play(props) {
        const track = playTrack(props.title, props.text,
            props.image, props.url);

        this.player.play([track]);
    }

    add(props) {
        props.buttons = listButtons;
        this.list.addCard(props);
    }

    delete (props) {
        this.list.deleteCard(props);
    }

    searchAction({action, props}) {
        if (!action) {
            return;
        }

        if (action === "play") {
            this.play(props);
        } else if(action == "add") {
            this.add(props);
        }
    }

    listAction({action, props}) {
        if (!action) {
            return;
        }

        if (action === "play") {
            this.play(props);
        } else {
            this.delete(props);
        }
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