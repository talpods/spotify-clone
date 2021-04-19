"use strict";

import Component from '../../lib/Component';
import { isAuthenticated } from '../../lib/authentication';

import data from './Playlist.json';
import {getCategories, getTracks, getCategorySlug} from '../../lib/data';


class Playlist extends Component {
    constructor() {
        super(data);
    }
}


const mountPlaylist  = container => {
    const component = new Playlist();
    component.mount(container);
    return component;
};


export default Playlist;

export {
    mountPlaylist
};