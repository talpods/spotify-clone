import Component from '../../lib/Component';
import data from './CardAddButton.json';

import ButtonIcon from './ButtonIcon';

const image = {
    image: "img/buttonplay.png",
    className: "state1"
};

class CardAddButton extends Component {
    constructor(props = image) {
        super(data);
        //this.append(new ButtonIcon(props));
    }
}

export default CardAddButton;