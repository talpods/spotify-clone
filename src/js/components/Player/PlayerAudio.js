"use strict";

import Component from "../../lib/Component";
import data from "./PlayerAudio.json";

class PlayerAudio extends Component {
    constructor() {
        super(data);
        this.element.controls = "controls";
        this.element.controlsList = "nodownload"
    }
}

export default PlayerAudio;