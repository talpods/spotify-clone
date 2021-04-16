"use strict";

import Component from "../../lib/Component";
import data from "./PlayerAudio.json";

class PlayerAudio extends Component {
    constructor(props) {
        super(data);
        this.element.controls = "controls";
        this.element.controlsList = "nodownload"
        this.song = props.song;
    }

    set song (value) {
        if (value) {
            this.element.src = value;
        }
    }
}

export default PlayerAudio;