import Component from '../../lib/Component';
import data from './CardButton.json';

import ButtonIcon from './ButtonIcon';

const defaultProps = {
    state1: {
        image: "img/buttonplay.png",
        className: "state1"
    },
    state2: {
        image: "img/buttonpause.png",
        className: "state2"
    }
};

class CardButton extends Component {
    constructor(props = defaultProps)
    {
        super(data);

        this.state1 = new ButtonIcon(props.state1);
        this.append(this.state1);

        this.state2 = new ButtonIcon(props.state2);
        this.append(this.state2);

        // we need the handler to set active state
        this.handler = this.addListener("click", this.click, this);
        this.active = false;

    }

    click(event) {
        this.active = !this.active;
        this.element.classList.toggle("active");
        event.props = {active: this.active};
    }
}

export default CardButton;