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
    constructor() {
        super(data);

        this.menu = new toolbarmenu();
        this.menu.mount(this.element);
    }
}

const mountToolbar = (container,) => {
    const component = new Toolbar();
    component.mount(container);
    return component;
}

export default Toolbar;

export {
    mountToolbar
};
