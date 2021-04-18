"use strict";

import Component, {setImageSource, setValue} from '../lib/Component';
import {isAuthenticated} from '../lib/authentication';

import data from "./Card.json";

class Card extends Component {
    constructor(props) {
        // load structure
        const config = isAuthenticated() ? data.auth : data.default;

        super(config);

        // fill data
        setValue(props.title, this.element.querySelector(".title"));
        setValue(props.text, this.element.querySelector(".text"));
        setImageSource(props.image, this.element.querySelector(".image"));
    }
}


export default Card;