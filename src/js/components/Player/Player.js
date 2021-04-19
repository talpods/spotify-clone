"use strict";

import Component from '../../lib/Component';
import { isAuthenticated } from '../../lib/authentication';
import redirect from "../../lib/redirect";
import playTrack from '../../lib/playTrack';

import data from './Player.json';
import PlayerImage from './PlayerImage';
import PlayerAudio from './PlayerAudio';
import PlayerInfo from './PlayerInfo';

import TrackIterator from '../../lib/TrackIterator';


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
            this.audio.addListener("ended", this.nextTrack, this);

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

    reset() {
        this.image.reset();
        this.audio.reset();
        this.info.reset();
    }

    nextTrack() {
        if(!this.trackIterator) {
            this.reset();
            return;
        }

        const track = this.trackIterator.next();

        if(track) {
            this.setTrack(track);
        } else {
            this.reset();
            //this.trackIterator = null;
        }
    }

    addAudioListener(event, callback, bindObj) {
        if(!isAuthenticated()) {
            return;
        }

        return this.audio.addListener(event, callback, bindObj);
    }


    play(tracks) {
        if(!isAuthenticated()) {
            return;
        }

        this.trackIterator = new TrackIterator(tracks);
        this.nextTrack();
    }

    setTrack(track) {
        this.image.setImage(track.image);
        this.info.title = track.title;
        this.info.author = track.author;
        this.audio.song = track.song;
    }
}

const mountPlayer = (parent, props = playTrack()) => {
    const player = new Player(props);
    player.mount(parent);
    return player;
};

export default Player;

export {
    mountPlayer
};