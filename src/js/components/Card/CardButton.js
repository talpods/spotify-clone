import Component from '../../lib/Component';
import data from './CardButton.json';

import ButtonIcon from './ButtonIcon';

const playProps = {
    image: "img/buttonplay.png",
    className: "state1",
    action: "play",
    position: ["right-4", "bottom-10"]
};

class CardButton extends Component {
    constructor(props = playProps) {
        super(data, props);

        props.position.forEach(cls => this.element.classList.add(cls));

        this.append(new ButtonIcon(props));

        this.addListener("click",this.action, this);
    }

    action(event) {
        event.action = this.props.action;
    }
}

export default CardButton;