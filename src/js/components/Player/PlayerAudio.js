"use strict";

import Component from "../../lib/Component";
import data from "./PlayerAudio.json";

import {isAuthenticated} from '../../lib/authentication';

class PlayerAudio extends Component {
    constructor(props) {
        super(data);
        this.element.controls = "controls";
        this.element.autoplay = "autoplay";
        this.element.controlsList = "nodownload"
        this.song = props.song;
    }

    set song (value) {
        if (isAuthenticated()) {
            this.element.setAttribute("src", value);
        }
    }

    reset() {
        this.element.currentTime = 0;
        this.element.pause();
        this.element.src = "";
    }
}

export default PlayerAudio;