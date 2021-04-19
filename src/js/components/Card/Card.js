"use strict";

import Component, {setImageSource, setValue} from '../../lib/Component';
import {isAuthenticated} from '../../lib/authentication';

import data from "./Card.json";

import CardImage from './CardImage';
import CardIcon from './CardIcon';
import CardTitle from './CardTitle';
import CardText from './CardText';
import CardButton from './CardButton';


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
            this.button = new CardButton();
            this.append(this.button);
            this.listener = this.addListener("click", this.click, this);
        }
    }



    click(event) {
        // filter clicks form the button and let other events to pass
        // use optional chaining see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
        if(event.target?.parentElement?.dataset?.comment !== "card-btn") {
            return;
        }

        // augment event data with props and index
        // add card index to the event to identify which card was clicked
        event.card = {
            index: event.currentTarget?.dataset?.index,
            props: {...this.props}
        }
    }
}


export default Card;