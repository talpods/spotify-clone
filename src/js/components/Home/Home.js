"use strict";

import Component from '../../lib/Component';
import data from './Home.json';

import {mountCategories, mountTracks} from '../CardCollection';

class Home extends Component {
    constructor() {
        super(data);

        this.categories = mountCategories(this.element);
        this.tracks = mountTracks(this.element);
    }
}


const mountHome = container => {
    const component = new Home();
    component.mount(container);
    return component;
};

export default Home;
export {
    mountHome
};

