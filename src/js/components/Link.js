"use strict";

import Component, {setImageSource, setValue} from '../lib/Component';
import data from './Link.json';

class Link extends Component {

    constructor(props) {
        super(data);

        setImageSource(props.img, this.element.querySelector(".link-icon"));

        this.element.appendChild(document.createTextNode(props.text));
        this.to = props.to;

        this.highlight = props.highlight;
        this.text = props.text;
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

    get to () {
        return this.element.getAttribute("href");
    }

    set to (val) {
        this.element.setAttribute("href", val);
    }
}

export default Link;