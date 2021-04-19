"use strict";

import Component, {setValue} from "../../lib/Component";
import data from "./PlayerInfo.json";

class PlayerInfo extends Component {
    constructor(props) {
        super(data);

        this.titleElement = this.element.querySelector(".title");
        this.authorElement = this.element.querySelector(".author");

        this.title = props.title;
        this.author = props.author;
    }

    set title(value) {
        setValue(value, this.titleElement);
    }

    set author(value) {
        setValue(value, this.authorElement);
    }

    reset() {
        this.title = "Title";
        this.author = "Author";
    }
}

export default PlayerInfo;