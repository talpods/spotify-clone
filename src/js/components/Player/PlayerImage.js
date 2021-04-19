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

    reset() {
        this.setImage("img/song-image.png");
    }
}

export default PlayerImage;