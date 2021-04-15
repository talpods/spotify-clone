"use strict";

import Component, {setImageSource, setValue} from '../lib/Component';

import config from "./Card.json";

class Card extends Component {
    constructor(props) {
        // load structure
        super(config);

        // fill data
        setValue(props.title, this.element.querySelector(".title"));
        setValue(props.text, this.element.querySelector(".text"));
        setImageSource(props.image, this.element.querySelector(".image"));
    }
}


export default Card;