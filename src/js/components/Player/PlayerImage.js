import Component, {setImageSource} from "../../lib/Component";
import data from './PlayerImage.json';

class PlayerImage extends Component {
    constructor(props) {
        super(data);
        this.setImage(props.image);
    }

    setImage(image) {
        setImageSource(image, this.element);
    }
}

export default PlayerImage;