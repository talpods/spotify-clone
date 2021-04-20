import Component from '../../lib/Component';

import data from './Playlist.json';
import { getCategories, getTracks, getCategorySlug } from '../../lib/data';
import playTrack from '../../lib/playTrack';

import CardCollection from '../CardCollection';

class Playlist extends Component {
    constructor(player) {
        super(data);

        this.player = player;
    }
}

const mountPlaylist = (container, player) => {
    const component = new Playlist(player);
    component.mount(container);
    return component;
};

export default Playlist;

export {
    mountPlaylist
};