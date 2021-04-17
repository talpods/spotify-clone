"use strict";

import Component, {
    setValue,
    getValue,
    setImageSource,
    setImageAlt,
    getTracks

} from '../lib/Component';
import data from './Toolbar.json';


class Toolbar extends Component {
    constructor(props) {
        super(data);

    }
}

export default Toolbar;