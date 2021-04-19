"use strict";

import Component from "../lib/Component";
import data from "../components/Toolbar.json";

class Toolbar extends Component {
    constructor() {
        super(data);
    }
}

const mountToolbar = (container) => {
    const component = new Toolbar();
    component.mount(container);
    return component;


};

export default Toolbar;

export {
    mountToolbar
};
