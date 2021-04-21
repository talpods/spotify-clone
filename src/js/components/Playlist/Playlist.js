import Component from '../../lib/Component';

import data from './Playlist.json';
import { getCategories, getTracks, getCategorySlug } from '../../lib/data';
import playTrack from '../../lib/playTrack';

import CardCollection from '../CardCollection';
import Card from '../Card/Card';

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

    play(card) {
        const { props } = card;

        const track = playTrack(props.title, props.text,
            props.image, props.url);

        this.player.play([track]);
    }

    add(card) {
        const {props} = card;
        props.buttons = listButtons;
        this.list.addCard(new Card(props));
    }

    delete (card) {
        this.list.deleteCard(card.index);
    }

    searchAction({action, card}) {
        if (!action) {
            return;
        }

        if (action === "play") {
            this.play(card);
        } else if(action == "add") {
            this.add(card);
        }
    }

    listAction({action, card}) {
        if (!action) {
            return;
        }

        if (action === "play") {
            this.play(card);
        } else {
            this.delete(card);
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