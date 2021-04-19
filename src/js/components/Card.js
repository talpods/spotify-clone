"use strict";

import Component, {setImageSource, setValue} from '../lib/Component';
import {isAuthenticated} from '../lib/authentication';

import data from "./Card.json";

class Card extends Component {
    constructor(props) {
        // load structure
        const config = isAuthenticated() ? data.auth : data.default;

        super(config, props);

        // fill data
        setValue(props.title, this.element.querySelector(".title"));
        setValue(props.text, this.element.querySelector(".text"));
        setImageSource(props.image, this.element.querySelector(".image"));

        if(isAuthenticated()) {
            this.listener = this.addListener("click", this.click, this);
        }
    }

    // Disconnect listeners
    removeEvents() {
        this.removeListener("click", this.listener);
    }

    click(event) {
        // filter clicks form the button and let other events to pass
        // use optional chaining see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
        if(event.target?.parentElement?.dataset?.comment !== "play-btn") {
            return;
        }

        // add card index to the event to identify which card was clicked
        event.cardIndex = event.currentTarget?.dataset?.index;
        event.props = this.props;
    }
}


export default Card;