import Component, {setValue} from '../../lib/Component';
import data from './CardTitle.json';

class CardTitle extends Component {
    constructor(props) {
        super(data);
        setValue(props, this.element);
    }

    set title(val) {
        setValue(val, this.element);
    }
}

export default CardTitle;