"use strict";

import Component, {setImageSource, setValue} from './Component';

import config from "./Card.json";

class Card extends Component {
    constructor(title, text, image) {
        // load structure
        super(config);

        // fill data
        setValue(title, this.element.querySelector(".title"));
        setValue(text, this.element.querySelector(".text"));
        setImageSource(image, this.element.querySelector(".image"));
    }
}


export default Card;