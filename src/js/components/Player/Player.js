"use strict";

import Component from '../../lib/Component';
import { isAuthenticated } from '../../lib/authentication';
import redirect from "../../lib/redirect";

import data from './Player.json';
import PlayerImage from './PlayerImage';
import PlayerAudio from './PlayerAudio';
import PlayerInfo from './PlayerInfo';
import Track from './Track';


class Player extends Component {
    constructor(props) {

        const authenticated = isAuthenticated();
        const json = authenticated ? data.auth : data.default;

        super(json);

        if (isAuthenticated()) {
            this.image = new PlayerImage(props);
            this.image.mount(this.element);

            this.audio = new PlayerAudio(props);
            this.audio.mount(this.element);

            this.info = new PlayerInfo(props);
            this.info.mount(this.element);
        } else {
            this.addListener("click", this.signup);
        }
    }

    signup({target}) {
        if(target.tagName !== "BUTTON") {
            return;
        }

        redirect.signup();
    }

    update(data) {
        if (isAuthenticated()) {
            this.image.setImage(data.image);
            this.audio.song = data.song;
            this.info.title = data.title;
            this.info.author = data.author;
        }
    }
}

const mountPlayer = (parent, props = new Track()) => {
    const player = new Player(props);
    player.mount(parent);
    return player;
};

export default Player;

export {
    mountPlayer
};