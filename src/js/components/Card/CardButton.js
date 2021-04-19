import Component from '../../lib/Component';
import data from './CardButton.json';

import ButtonIcon from './ButtonIcon';

const image = {
    image: "img/buttonplay.png",
    className: "state1"
};

class CardButton extends Component {
    constructor(props = image) {
        super(data);
        this.append(new ButtonIcon(props));
    }
}

export default CardButton;