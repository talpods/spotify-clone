"use strict";

import Component, {setImageSource, setValue} from '../../lib/Component';
import {isAuthenticated} from '../../lib/authentication';

import data from "./Card.json";

import CardImage from './CardImage';
import CardIcon from './CardIcon';
import CardTitle from './CardTitle';
import CardText from './CardText';
import {buttonFactory} from './buttonFactory';


class Card extends Component {
    constructor(props) {
        // load structure
        super(data, props);

        this.append(new CardImage(props.image));
        this.append(new CardIcon());
        this.append(new CardTitle(props.title));
        this.append(new CardText(props.text));

        this.active = false;

        if(isAuthenticated()) {
            props.buttons.forEach(type => this.append(buttonFactory(type)));

            this.listener = this.addListener("click", this.click, this);
        }
    }

    click(event) {
        if(!event.action) {
            return;
        }

        event.props = {...this.props};
    }
}


export default Card;