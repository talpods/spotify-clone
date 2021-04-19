import Component, {setImageSource} from '../../lib/Component';
import data from './ButtonIcon.json';

class ButtonIcon extends Component {
    constructor(props = {image: "img/buttonplay.png", className: "state1"}) {
        super(data);

        setImageSource(props.image, this.element);
        this.element.className = props.className;
    }
}

export default ButtonIcon;