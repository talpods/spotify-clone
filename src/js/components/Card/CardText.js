"use strict";

import Component, {setValue} from '../../lib/Component';
import data from './CardText.json';

class CardText extends Component {
    constructor(props) {
        super(data);
        setValue(props, this.element);
    }

    set text(val) {
        setValue(val, this.element);
    }
}

export default CardText;