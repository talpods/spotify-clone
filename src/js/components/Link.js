"use strict";

import Component, {setImageSource, setValue} from '../lib/Component';
import data from './Link.json';

class Link extends Component {

    constructor(props) {
        super(data);

        setImageSource(props.img, this.element.querySelector(".link-icon"));

        this.element.appendChild(document.createTextNode(props.text));

        this.highlight = props.highlight;
    }


    set highlight(val) {
        if (val) {
            this.element.classList.add("highlight");
        } else {
            this.element.classList.remove("highlight");
        }
    }

    get highlight() {
        return this.classList.contains("highlight");
    }
}

export default Link;