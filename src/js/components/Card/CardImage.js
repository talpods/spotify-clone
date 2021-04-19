"use strict";

import Component, {setImageSource} from '../../lib/Component';
import data from './CardImage.json';

class CardImage extends Component {
    constructor(props) {
        super(data);
        setImageSource(props, this.element);
    }

    set image(value) {
        setImageSource(value, this.element);
    }
}

export default CardImage;