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

const mountToolbar = (container) => {
    const component = new Toolbar();
    component.mount(container);
    return component;
};
export default Toolbar;